import React, { useState, ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

interface Macros {
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
}

const MacroCalculator: React.FC = () => {
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('male');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<string>('sedentary');
  const [goal, setGoal] = useState<string>('maintain');
  const [macros, setMacros] = useState<Macros | null>(null);
  const [error, setError] = useState<string>('');

  const calculateMacros = () => {
    const numAge = parseInt(age);
    const numHeight = parseInt(height);
    const numWeight = parseInt(weight);

    if (isNaN(numAge) || numAge <= 0 || isNaN(numHeight) || numHeight <= 0 || isNaN(numWeight) || numWeight <= 0) {
      setError('Zadejte prosím platný věk, výšku a váhu.');
      setMacros(null);
      return;
    }

    setError('');

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * numWeight + 6.25 * numHeight - 5 * numAge + 5;
    } else {
      bmr = 10 * numWeight + 6.25 * numHeight - 5 * numAge - 161;
    }

    // Calculate TDEE
    let tdeeFactor = 1.2; // Sedentary
    if (activityLevel === 'light') tdeeFactor = 1.375;
    else if (activityLevel === 'moderate') tdeeFactor = 1.55;
    else if (activityLevel === 'active') tdeeFactor = 1.725;
    else if (activityLevel === 'extra_active') tdeeFactor = 1.9;

    let tdee = bmr * tdeeFactor;

    // Adjust TDEE based on goal
    if (goal === 'lose') tdee *= 0.8; // 20% deficit
    else if (goal === 'gain') tdee *= 1.1; // 10% surplus

    // Calculate macros (example: 40% carbs, 30% protein, 30% fats)
    // Adjust protein for muscle gain if goal is 'gain'
    const proteinGrams = (goal === 'gain' ? 2.2 : 1.8) * numWeight; // g per kg of body weight
    const proteinCalories = proteinGrams * 4;

    const fatPercentage = goal === 'lose' ? 0.25 : 0.30;
    const fatCalories = tdee * fatPercentage;
    const fatGrams = fatCalories / 9;

    const carbCalories = tdee - proteinCalories - fatCalories;
    const carbGrams = carbCalories / 4;

    setMacros({
      protein: Math.round(proteinGrams),
      carbs: Math.round(carbGrams),
      fats: Math.round(fatGrams),
      calories: Math.round(tdee),
    });
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">Makro kalkulačka</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <Label htmlFor="ageMacro">Věk</Label>
            <Input id="ageMacro" type="number" value={age} onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)} placeholder="Např. 30" />
          </div>
          <div>
            <Label htmlFor="genderMacro">Pohlaví</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger id="genderMacro"><SelectValue placeholder="Vyberte pohlaví" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Muž</SelectItem>
                <SelectItem value="female">Žena</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="heightMacro">Výška (cm)</Label>
            <Input id="heightMacro" type="number" value={height} onChange={(e: ChangeEvent<HTMLInputElement>) => setHeight(e.target.value)} placeholder="Např. 175" />
          </div>
          <div>
            <Label htmlFor="weightMacro">Váha (kg)</Label>
            <Input id="weightMacro" type="number" value={weight} onChange={(e: ChangeEvent<HTMLInputElement>) => setWeight(e.target.value)} placeholder="Např. 70" />
          </div>
          <div>
            <Label htmlFor="activityLevel">Úroveň aktivity</Label>
            <Select value={activityLevel} onValueChange={setActivityLevel}>
              <SelectTrigger id="activityLevel"><SelectValue placeholder="Vyberte úroveň" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedavé (minimální nebo žádné cvičení)</SelectItem>
                <SelectItem value="light">Lehce aktivní (lehké cvičení/sport 1-3 dny/týden)</SelectItem>
                <SelectItem value="moderate">Středně aktivní (střední cvičení/sport 3-5 dní/týden)</SelectItem>
                <SelectItem value="active">Velmi aktivní (intenzivní cvičení/sport 6-7 dní/týden)</SelectItem>
                <SelectItem value="extra_active">Extrémně aktivní (velmi intenzivní cvičení/sport & fyzická práce)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="goal">Cíl</Label>
            <Select value={goal} onValueChange={setGoal}>
              <SelectTrigger id="goal"><SelectValue placeholder="Vyberte cíl" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="maintain">Udržet váhu</SelectItem>
                <SelectItem value="lose">Zhubnout</SelectItem>
                <SelectItem value="gain">Přibrat svaly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={calculateMacros} className="w-full !mt-6 text-white">
            Zjistit makra
          </Button>
          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
              <p>{error}</p>
            </div>
          )}
          {macros && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg space-y-2">
              <h4 className="text-lg font-semibold text-center mb-2">Vaše doporučené denní hodnoty:</h4>
              <p><strong>Kalorie:</strong> {macros.calories} kcal</p>
              <p><strong>Bílkoviny:</strong> {macros.protein} g</p>
              <p><strong>Sacharidy:</strong> {macros.carbs} g</p>
              <p><strong>Tuky:</strong> {macros.fats} g</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MacroCalculator;
