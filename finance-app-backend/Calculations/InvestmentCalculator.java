public class InvestmentCalculator {

    public static void main(String args[])
    {
        double principal = Double.parseDouble(args[0]);
        double rate = Double.parseDouble(args[1]);
        int years = Integer.parseInt(args[2]);
        int frequency = Integer.parseInt(args[3]);

        double r = rate / (100*frequency);
        double maturity = principal * Math.pow(1+r,frequency*years);
        double interest = maturity - principal;

        System.out.printf("%.2f %.2f", maturity, interest);

    }
    
}
