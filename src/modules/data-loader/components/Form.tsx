import React from 'react';
import StepperComponent from './Stepper';
import Footer from './Footer';
import { Grid } from '@mui/material';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

export default function Form (props: { state: any; onChange: (p: string, v: string|number) => any }) {
  const [step, setStep] = React.useState(0);
  const changeStep = (s: "add"|"rest") => {
    if(s === "add") return setStep(step+1)
    return setStep(step-1)
  }
  return (
    <Grid container display="flex" alignItems="center" justifyContent="space-between" minHeight={"60vh"}>
      <StepperComponent step={step} />
      {
        step === 0 ? <Step1 {...props} /> :
        step === 1 ? <Step2 {...props} /> : 
        step === 2 ? <Step3 {...props} /> : 
        null
      }
      <Footer changeStep={changeStep} disabledRest={step===0} disabledAdd={step===2} />
    </Grid>
  );
}