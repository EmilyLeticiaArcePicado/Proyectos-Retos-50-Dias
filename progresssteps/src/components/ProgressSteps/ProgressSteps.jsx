import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './ProgressSteps.css'; // Asegúrate de que la ruta es correcta

const steps = [
  { id: 1, title: 'Información Personal' },
  { id: 2, title: 'Detalles de Contacto' },
  { id: 3, title: 'Preferencias' },
  { id: 4, title: 'Confirmación' },
];

export default function ProgressSteps() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="container">
      <div className="steps">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="step">
              <div
                className={`step-circle ${step.id <= currentStep ? 'step-active' : 'step-inactive'}`}
              >
                {step.id < currentStep ? (
                  <Check className="w-6 h-6" />
                ) : (
                  step.id
                )}
              </div>
              <div className="step-title">
                <p className={`text-sm ${step.id <= currentStep ? 'text-blue-500' : 'text-gray-400'}`}>
                  {step.title}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`step-line ${step.id < currentStep ? 'step-active' : 'step-inactive'}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="content">
        <h2 className="title">
          Paso {currentStep}: {steps[currentStep - 1].title}
        </h2>
        <p className="text">
          Contenido del paso {currentStep}. Aquí iría el formulario o la información correspondiente a este paso.
        </p>
      </div>

      <div className="button-container">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1}
          className="button button-prev"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className="button button-next"
        >
          {currentStep === steps.length ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
}

