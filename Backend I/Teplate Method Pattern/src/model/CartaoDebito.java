public class CartaoDebito extends Cartao{
    private Double saldo;

    public CartaoDebito(int numerosFrente, int numerosVerso, int diaVencimento, String tipo, Double saldo) {
        super(numerosFrente, numerosVerso, diaVencimento, tipo);
        this.saldo = saldo;
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }
}
