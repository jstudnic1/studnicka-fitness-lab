import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [interpretation, setInterpretation] = useState<string>('');

  const calculateBmi = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const bmiValue = w / (h / 100) ** 2;
      setBmi(parseFloat(bmiValue.toFixed(2)));
      interpretBmi(bmiValue);
    } else {
      setBmi(null);
      setInterpretation('Zadejte prosím platnou výšku a váhu.');
    }
  };

  const interpretBmi = (bmiValue: number) => {
    if (bmiValue < 18.5) {
      setInterpretation('Podváha');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setInterpretation('Normální váha');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setInterpretation('Nadváha');
    } else if (bmiValue >= 30 && bmiValue <= 34.9) {
      setInterpretation('Obezita I. stupně');
    } else if (bmiValue >= 35 && bmiValue <= 39.9) {
      setInterpretation('Obezita II. stupně');
    } else {
      setInterpretation('Obezita III. stupně (morbidní)');
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">BMI kalkulačka</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="heightBmi" className="block text-sm font-medium text-gray-700 mb-1">Výška (cm)</label>
            <Input
              type="number"
              id="heightBmi"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Např. 175"
            />
          </div>
          <div>
            <label htmlFor="weightBmi" className="block text-sm font-medium text-gray-700 mb-1">Váha (kg)</label>
            <Input
              type="number"
              id="weightBmi"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Např. 70"
            />
          </div>
          <Button onClick={calculateBmi} className="w-full">
            Spočítej si BMI
          </Button>
          {bmi !== null && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-lg font-semibold">Vaše BMI: {bmi}</p>
              <p className="text-md text-gray-700">{interpretation}</p>
            </div>
          )}
          {bmi === null && interpretation && (
             <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
                <p>{interpretation}</p>
             </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BMICalculator;
