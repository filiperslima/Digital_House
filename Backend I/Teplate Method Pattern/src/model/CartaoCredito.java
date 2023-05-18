public class CartaoCredito extends Cartao{
    private Double limite;
    private Double saldoUtilizado;

    protected CartaoCredito(int numerosFrente, int numerosVerso, int diaVencimento, String tipo, Double limite, Double saldoUtilizado) {
        super(numerosFrente, numerosVerso, diaVencimento, tipo);
        this.limite = limite;
        this.saldoUtilizado = saldoUtilizado;
    }

    public Double getLimite() {
        return limite;
    }

    public void setLimite(Double limite) {
        this.limite = limite;
    }

    public Double getSaldoUtilizado() {
        return saldoUtilizado;
    }

    public void setSaldoUtilizado(Double saldoUtilizado) {
        this.saldoUtilizado = saldoUtilizado;
    }
}
