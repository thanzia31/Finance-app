public class EmiCalculator {
    
    public static void main(String[] args) {
        
         if (args.length < 3) {
            System.out.println("0 0 0");
            return;
        }

        double principal = Double.parseDouble(args[0]);
        double annualInterest = Double.parseDouble(args[1]);
        int months = Integer.parseInt(args[2]);

        double monthlyRate = annualInterest / (12*100);
        double emi = (principal * monthlyRate * Math.pow(1+ monthlyRate,months))/
                    (Math.pow(1+monthlyRate,months) - 1);
        double total = emi*months;
        double interest = total - principal;
        System.out.printf("%.2f %.2f %.2f", emi, total, interest);
    }
}
