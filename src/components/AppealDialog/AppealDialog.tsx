import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import styles from "./AppealDialog.module.scss";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/Button/Button.js";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {useTranslation} from 'react-i18next';


type AppealDialogProps = {
  isOpen: boolean;
  isOpenToggle: (open: boolean) => void;
};


export default function AppealDialog({isOpen, isOpenToggle}: AppealDialogProps) {
  const {t} = useTranslation();

  const formSchema = z.object({
    fullName: z
      .string()
      .min(2, t('forms.name.error.min'))
      .max(100, t('forms.name.error.max')),

    email: z
      .string()
      .email(t('forms.email.error')),

    phone: z
      .string()
      .regex(/^[0-9+\-\s()]{6,20}$/, t('forms.phone_number.error')),

    message: z
      .string()
      .max(1000, t('forms.message.error.max'))
      .optional(),

    consent: z.literal(true, {
      errorMap: () => ({message: t('forms.consent.error')}),
    }),
  });

  type AppealFormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<AppealFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: AppealFormData) => {
    console.log(data);
  };


  return (
    <Dialog open={isOpen} onOpenChange={isOpenToggle}>
      <DialogContent className={styles.dialogContent}>
        <DialogHeader className={styles.dialogHeader}>
          <DialogTitle className={styles.dialogTitle}>{t('forms.online_appeal.title')}</DialogTitle>
          <p className={styles.dialogSubtitle}>
            {t('forms.online_appeal.subtitle')}
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.field}>
            <Label htmlFor="fullName">{t('forms.name.label')}</Label>
            <Input className={errors.fullName ? styles.inputError : ''} id="fullName" {...register("fullName")} />
            {errors.fullName && <span className={styles.error}>{errors.fullName.message}</span>}
          </div>

          <div className={styles.double}>
            <div className={styles.field}>
              <Label htmlFor="email">{t('forms.email.label')}</Label>
              <Input className={errors.email ? styles.inputError : ''} id="email" type="email" {...register("email")} />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>

            <div className={styles.field}>
              <Label htmlFor="phone">{t('forms.phone_number.label')}</Label>
              <Input className={errors.phone ? styles.inputError : ''} id="phone" {...register("phone")} />
              {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <Label htmlFor="message">{t('forms.message.label')}</Label>
            <Textarea id="message" rows={4} {...register("message")} />
            {errors.message && <span className={styles.error}>{errors.message.message}</span>}
          </div>

          <div>
            <Controller
              name="consent"
              control={control}
              render={({field}) => (
                <label htmlFor="consent" className={styles.checkbox}>
                  <Checkbox
                    id="consent"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  {t('forms.consent.label')}
                </label>
              )}
            />
          </div>
          {errors.consent && <span className={styles.errorSubmit}>{errors.consent.message}</span>}
          <Button variant="black" className={styles.submit}>{t('forms.submit')}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}