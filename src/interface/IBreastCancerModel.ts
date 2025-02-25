export interface BreastCancerFeatures {
  radius_mean: number;
  texture_mean: number;
  perimeter_mean: number;
  area_mean: number;
  smoothness_mean: number;
  compactness_mean: number;
  concavity_mean: number;
  'concave points_mean': number;
  symmetry_mean: number;
  fractal_dimension_mean: number;
  radius_se: number;
  texture_se: number;
  perimeter_se: number;
  area_se: number;
  smoothness_se: number;
  compactness_se: number;
  concavity_se: number;
  'concave points_se': number;
  symmetry_se: number;
  fractal_dimension_se: number;
  radius_worst: number;
  texture_worst: number;
  perimeter_worst: number;
  area_worst: number;
  smoothness_worst: number;
  compactness_worst: number;
  concavity_worst: number;
  'concave points_worst': number;
  symmetry_worst: number;
  fractal_dimension_worst: number;
}

export const featureNames: (keyof BreastCancerFeatures)[] = [
  'radius_mean',
  'texture_mean',
  'perimeter_mean',
  'area_mean',
  'smoothness_mean',
  'compactness_mean',
  'concavity_mean',
  'concave points_mean',
  'symmetry_mean',
  'fractal_dimension_mean',
  'radius_se',
  'texture_se',
  'perimeter_se',
  'area_se',
  'smoothness_se',
  'compactness_se',
  'concavity_se',
  'concave points_se',
  'symmetry_se',
  'fractal_dimension_se',
  'radius_worst',
  'texture_worst',
  'perimeter_worst',
  'area_worst',
  'smoothness_worst',
  'compactness_worst',
  'concavity_worst',
  'concave points_worst',
  'symmetry_worst',
  'fractal_dimension_worst',
];
