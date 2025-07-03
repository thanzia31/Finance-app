export interface Investment {
  principal: number;
  rate: number;
  years: number;
  frequency: number; 
  maturityAmount: number;
  interest: number;
  createdAt?: string; 
  _id?: string;       
}
