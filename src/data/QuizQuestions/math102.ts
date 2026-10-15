
import { Topic } from '.'

export const math102: Topic = {
  topic: 'MATH 102 - Calculus',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 2400, // estimate (40 min) - source had no time limit, adjust as needed
  questions: [
    
    {
  question: 'In the notation y = f(x), what does x represent?',
  choices: [
    'The dependent variable',
    'The independent variable',
    'The constant',
    'The slope',
  ],
  type: 'MCQs',
  correctAnswers: ['The independent variable'],
  score: 1,
  rationale:
    'B. The independent variable.\n\nThe variable x is the input to the function. Its value determines the corresponding output, f(x).',
},
{
  question: 'Which of the following is an example of a linear function?',
  choices: [
    'f(x) = x²',
    'f(x) = 2x + 3',
    'f(x) = sin x',
    'f(x) = 1/x',
  ],
  type: 'MCQs',
  correctAnswers: ['f(x) = 2x + 3'],
  score: 1,
  rationale:
    'B. f(x) = 2x + 3.\n\nA linear function has the form f(x) = mx + c, where m is the slope and c is the y-intercept.',
},
{
  question: 'What is the domain of the function f(x) = 1/x?',
  choices: [
    'All real numbers',
    'All real numbers except 0',
    'Only positive numbers',
    'Only negative numbers',
  ],
  type: 'MCQs',
  correctAnswers: ['All real numbers except 0'],
  score: 1,
  rationale:
    'B. All real numbers except 0.\n\nThe denominator cannot be zero, so x = 0 is excluded from the domain.',
},
{
  question: 'The graph of a function f(x) is drawn on which plane?',
  choices: [
    'The Cartesian plane',
    'The polar plane',
    'The complex plane',
    'The 3D plane',
  ],
  type: 'MCQs',
  correctAnswers: ['The Cartesian plane'],
  score: 1,
  rationale:
    'A. The Cartesian plane.\n\nA function is usually represented on the Cartesian plane using the x-axis for inputs and the y-axis for outputs.',
},
{
  question: 'What is the shape of the graph of the quadratic function f(x) = x²?',
  choices: [
    'A straight line',
    'A parabola',
    'An S-shaped curve',
    'A circle',
  ],
  type: 'MCQs',
  correctAnswers: ['A parabola'],
  score: 1,
  rationale:
    'B. A parabola.\n\nThe graph of x² is a U-shaped curve called a parabola.',
},
{
  question: 'Where does the graph of a function cross the y-axis?',
  choices: [
    'At the x-intercept',
    'At the y-intercept',
    'At the origin only',
    'At the asymptote',
  ],
  type: 'MCQs',
  correctAnswers: ['At the y-intercept'],
  score: 1,
  rationale:
    'B. At the y-intercept.\n\nThe y-intercept is the point where the graph crosses the y-axis.',
},
{
  question: 'To find the y-intercept of a function, you must:',
  choices: [
    'Set f(x) = 0',
    'Set x = 0',
    'Set y = 1',
    'Set x = 1',
  ],
  type: 'MCQs',
  correctAnswers: ['Set x = 0'],
  score: 1,
  rationale:
    'B. Set x = 0.\n\nSubstituting x = 0 into the function gives the y-coordinate where the graph meets the y-axis.',
},
{
  question: 'Evaluate limₓ→₃ (2x + 5).',
  choices: [
    '8',
    '11',
    '10',
    '6',
  ],
  type: 'MCQs',
  correctAnswers: ['11'],
  score: 1,
  rationale:
    'B. 11.\n\nThis limit is found by direct substitution: 2(3) + 5 = 11.',
},
{
  question: 'If direct substitution gives the indeterminate form 0/0 when evaluating a limit, what should you do next?',
  choices: [
    'Give up',
    'Assume the limit is 0',
    'Simplify the expression before evaluating again',
    'Assume the limit is 1',
  ],
  type: 'MCQs',
  correctAnswers: ['Simplify the expression before evaluating again'],
  score: 1,
  rationale:
    'C. Simplify the expression before evaluating again.\n\nAn indeterminate form such as 0/0 usually requires algebraic simplification before the limit can be evaluated.',
},
{
  question: 'Informally, when is a function said to be continuous?',
  choices: [
    'It has many holes',
    'Its graph can be drawn without lifting your pen',
    'It is always a straight line',
    'It goes to infinity',
  ],
  type: 'MCQs',
  correctAnswers: ['Its graph can be drawn without lifting your pen'],
  score: 1,
  rationale:
    'B. Its graph can be drawn without lifting your pen.\n\nA continuous function has no breaks, holes, or jumps over the interval being considered.',
},
{
  question: 'Which of the following is NOT a condition for continuity at x = a?',
  choices: [
    'f(a) is defined',
    'The limit exists',
    'The limit equals the function value',
    'The function is a parabola',
  ],
  type: 'MCQs',
  correctAnswers: ['The function is a parabola'],
  score: 1,
  rationale:
    'D. The function is a parabola.\n\nA function is continuous at a point if f(a) exists, the limit exists, and the limit equals f(a). The type of function does not determine continuity.',
},
{
  question: 'What is the derivative of f(x) = x² using first principles?',
  choices: [
    '1',
    'x',
    '2x',
    'x²',
  ],
  type: 'MCQs',
  correctAnswers: ['2x'],
  score: 1,
  rationale:
    'C. 2x.\n\nApplying the limit definition of the derivative to x² simplifies to 2x.',
},
{
  question: 'The instantaneous rate of change of a function is equal to its:',
  choices: [
    'Average velocity',
    'Derivative at a point',
    'Limit as x approaches 0',
    'Y-intercept',
  ],
  type: 'MCQs',
  correctAnswers: ['Derivative at a point'],
  score: 1,
  rationale:
    'B. Derivative at a point.\n\nThe derivative evaluated at a particular point gives the instantaneous rate of change of the function there.',
},
{
  question: 'Velocity is the derivative of which quantity with respect to time?',
  choices: [
    'Acceleration',
    'Time',
    'Position',
    'Mass',
  ],
  type: 'MCQs',
  correctAnswers: ['Position'],
  score: 1,
  rationale:
    'C. Position.\n\nVelocity measures how position changes with time, so it is the derivative of position.',
},
{
  question: 'Using the Power Rule, what is the derivative of x⁵?',
  choices: [
    'x⁴',
    '5x⁴',
    '5x⁵',
    '4x⁵',
  ],
  type: 'MCQs',
  correctAnswers: ['5x⁴'],
  score: 1,
  rationale:
    'B. 5x⁴.\n\nThe Power Rule states that d/dx(xⁿ) = nxⁿ⁻¹. Therefore, the derivative of x⁵ is 5x⁴.',
},
{
  question: 'The derivative distributes over which operation?',
  choices: [
    'Addition and subtraction',
    'Multiplication only',
    'Division only',
    'None of the above',
  ],
  type: 'MCQs',
  correctAnswers: ['Addition and subtraction'],
  score: 1,
  rationale:
    'A. Addition and subtraction.\n\nThe Sum and Difference Rules allow each term in a sum or difference to be differentiated separately.',
},
{
  question: 'The Chain Rule is primarily used for differentiating:',
  choices: [
    'Simple powers',
    'Composite functions',
    'Constants',
    'Products of two functions',
  ],
  type: 'MCQs',
  correctAnswers: ['Composite functions'],
  score: 1,
  rationale:
    'B. Composite functions.\n\nThe Chain Rule is used when one function is inside another function, such as f(g(x)).',
},
{
  question: 'When applying the Chain Rule, what is the correct procedure?',
  choices: [
    'Differentiate the inner function first, then the outer',
    'Differentiate the outer function, keep the inner function unchanged, then multiply by the derivative of the inner function',
    'Add the derivatives together',
    'Divide the derivatives',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Differentiate the outer function, keep the inner function unchanged, then multiply by the derivative of the inner function',
  ],
  score: 1,
  rationale:
    'B. Differentiate the outer function, keep the inner function unchanged, then multiply by the derivative of the inner function.\n\nThis follows the Chain Rule: differentiate the outer function first, then multiply by the derivative of the inner function.',
},
{
  question: 'In implicit differentiation, y is treated as:',
  choices: [
    'A constant',
    'A function of x',
    'Independent of x',
    'Zero',
  ],
  type: 'MCQs',
  correctAnswers: ['A function of x'],
  score: 1,
  rationale:
    'B. A function of x.\n\nSince y depends on x, differentiating y requires the use of dy/dx.',
},
{
  question: 'Logarithmic differentiation is especially useful when:',
  choices: [
    'The variable appears in the exponent',
    'The function is a simple polynomial',
    'The function is constant',
    'Two functions are added together',
  ],
  type: 'MCQs',
  correctAnswers: ['The variable appears in the exponent'],
  score: 1,
  rationale:
    'A. The variable appears in the exponent.\n\nLogarithmic differentiation simplifies differentiation when the variable appears in the base, exponent, or both, such as xˣ.',
},
{
  question: 'A function is increasing on an interval when its derivative is:',
  choices: [
    'Less than zero',
    'Equal to zero',
    'Greater than zero',
    'Undefined everywhere',
  ],
  type: 'MCQs',
  correctAnswers: ['Greater than zero'],
  score: 1,
  rationale:
    'C. Greater than zero.\n\nA function increases on an interval where its derivative is positive.',
},
{
  question: 'A critical point of a function occurs where:',
  choices: [
    'The derivative is zero or undefined',
    'The function equals zero',
    'The graph crosses the y-axis',
    'The limit does not exist',
  ],
  type: 'MCQs',
  correctAnswers: ['The derivative is zero or undefined'],
  score: 1,
  rationale:
    'A. The derivative is zero or undefined.\n\nCritical points occur where the derivative is zero or does not exist. These points are used to locate possible maxima and minima.',
},
{
  question: 'The First Derivative Test is mainly used to determine:',
  choices: [
    'The area under a curve',
    'Local maximum and minimum points',
    'The y-intercept',
    'The domain of a function',
  ],
  type: 'MCQs',
  correctAnswers: ['Local maximum and minimum points'],
  score: 1,
  rationale:
    'B. Local maximum and minimum points.\n\nThe First Derivative Test examines sign changes in the derivative to identify local maxima and minima.',
},
{
  question: 'The Second Derivative Test helps determine the:',
  choices: [
    'Slope of the tangent',
    'Concavity and nature of critical points',
    'Range of a function',
    'Equation of the function',
  ],
  type: 'MCQs',
  correctAnswers: ['Concavity and nature of critical points'],
  score: 1,
  rationale:
    'B. Concavity and nature of critical points.\n\nThe second derivative shows whether a graph is concave up or down and helps classify critical points.',
},
{
  question: 'What is the domain of the function f(x) = 1/(x − 2)?',
  choices: [
    'All real numbers',
    'All real numbers except 2',
    'Only positive numbers',
    'x > 2',
  ],
  type: 'MCQs',
  correctAnswers: ['All real numbers except 2'],
  score: 1,
  rationale:
    'B. All real numbers except 2.\n\nThe denominator cannot be zero, so x = 2 is excluded from the domain.',
},
{
  question: 'A graph is said to be concave upward when:',
  choices: [
    'The second derivative is positive',
    'The first derivative is negative',
    'The function is decreasing',
    'The slope is zero',
  ],
  type: 'MCQs',
  correctAnswers: ['The second derivative is positive'],
  score: 1,
  rationale:
    'A. The second derivative is positive.\n\nA positive second derivative indicates that the graph is concave upward.',
},
{
  question: 'An inflection point is a point where the graph:',
  choices: [
    'Crosses the x-axis',
    'Changes concavity',
    'Has a horizontal tangent only',
    'Reaches its highest point',
  ],
  type: 'MCQs',
  correctAnswers: ['Changes concavity'],
  score: 1,
  rationale:
    'B. Changes concavity.\n\nAn inflection point is where the graph changes from concave up to concave down or vice versa.',
},
{
  question: 'Integration is primarily the process of:',
  choices: [
    'Finding the derivative of a function',
    'Finding the antiderivative of a function',
    'Factoring a polynomial',
    'Evaluating a limit',
  ],
  type: 'MCQs',
  correctAnswers: ['Finding the antiderivative of a function'],
  score: 1,
  rationale:
    'B. Finding the antiderivative of a function.\n\nIntegration is the reverse of differentiation and is used to find antiderivatives.',
},
{
  question: 'Why is the constant of integration (+C) added to an indefinite integral?',
  choices: [
    'To increase the value of the integral',
    'Because the derivative of any constant is zero',
    'To simplify the answer',
    'To remove fractions',
  ],
  type: 'MCQs',
  correctAnswers: ['Because the derivative of any constant is zero'],
  score: 1,
  rationale:
    'B. Because the derivative of any constant is zero.\n\nDifferent functions that differ only by a constant have the same derivative, so +C must be included.',
},
{
  question: 'What is ∫x³ dx?',
  choices: [
    'x⁴',
    '4x³ + C',
    '(x⁴/4) + C',
    '3x² + C',
  ],
  type: 'MCQs',
  correctAnswers: ['(x⁴/4) + C'],
  score: 1,
  rationale:
    'C. (x⁴/4) + C.\n\nUsing the Power Rule for integration, increase the exponent by one and divide by the new exponent, then add the constant of integration.',
},
{
  question: 'Integration by Parts is mainly used when:',
  choices: [
    'Integrating a constant',
    'Integrating the product of two functions',
    'Finding a limit',
    'Differentiating composite functions',
  ],
  type: 'MCQs',
  correctAnswers: ['Integrating the product of two functions'],
  score: 1,
  rationale:
    'B. Integrating the product of two functions.\n\nIntegration by Parts is used to integrate products of functions that cannot be integrated directly.',
},
{
  question: 'Which formula represents Integration by Parts?',
  choices: [
    '∫u dv = uv − ∫v du',
    '∫u dv = uv + ∫v du',
    '∫u dv = u + v',
    '∫u dv = du × dv',
  ],
  type: 'MCQs',
  correctAnswers: ['∫u dv = uv − ∫v du'],
  score: 1,
  rationale:
    'A. ∫u dv = uv − ∫v du.\n\nThis is the standard Integration by Parts formula derived from the Product Rule for differentiation.',
},
{
  question: 'Which differentiation rule is used when dividing one function by another?',
  choices: [
    'Product Rule',
    'Power Rule',
    'Chain Rule',
    'Quotient Rule',
  ],
  type: 'MCQs',
  correctAnswers: ['Quotient Rule'],
  score: 1,
  rationale:
    'D. Quotient Rule.\n\nThe Quotient Rule is applied when differentiating one function divided by another.',
},
]}