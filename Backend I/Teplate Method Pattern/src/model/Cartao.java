public class  Cartao {
    private int numerosFrente;
    private int numerosVerso;
    private int diaVencimento;
    private String tipo;


    protected Cartao(int numerosFrente, int numerosVerso, int diaVencimento, String tipo) {
        this.numerosFrente = numerosFrente;
        this.numerosVerso = numerosVerso;
        this.diaVencimento = diaVencimento;
        this.tipo = tipo;
    }

    public int getNumerosFrente() {
        return numerosFrente;
    }

    public void setNumerosFrente(int numerosFrente) {
        this.numerosFrente = numerosFrente;
    }

    public int getNumerosVerso() {
        return numerosVerso;
    }

    public void setNumerosVerso(int numerosVerso) {
        this.numerosVerso = numerosVerso;
    }

    public int getDiaVencimento() {
        return diaVencimento;
    }

    public void setDiaVencimento(int diaVencimento) {
        this.diaVencimento = diaVencimento;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
}
