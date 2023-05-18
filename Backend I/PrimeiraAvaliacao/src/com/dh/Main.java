import com.dh.config.ConfiguracaoJDBC;
import com.dh.dao.impl.FilialDao;
import com.dh.model.Filial;
import com.dh.service.FilialService;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;


public class Main {
    private static FilialService filialService = new FilialService(new FilialDao());


    public static void main(String[] args) {
        ConfiguracaoJDBC configuracaoJDBC = new ConfiguracaoJDBC();
        Connection connection = configuracaoJDBC.conectarBancoDeDados();

        try {
            Statement statement = connection.createStatement();
            Filial filial = new Filial("EcoHotel", "Rua da liberdade", "1003", "Recife", "Pernambuco", true);
            Filial filial2 = new Filial("Hotel Sunset", "Rua das Flores Amarelas", "1003", "Belém", "Pará", false);
            Filial filial3 = new Filial("Paradise island", "Praça dos Sonhos Perdidos", "1003", "São Paulo", "São Paulo", false);
            Filial filial4 = new Filial("Montanha Encantada Spa & Resort", "Avenida das Estrelas Brilhantes", "1003", "Floresta", "Pernambuco", true);
            Filial filial5 = new Filial("Lua de Prata Hotel & Suites", "Travessa das Águas Calmas", "1003", "Salvador", "Bahia", true);

            Filial f1 = filialService.salvar(filial);
            Filial f2 = filialService.salvar(filial2);
            Filial f3 = filialService.salvar(filial3);
            Filial f4 = filialService.salvar(filial4);
            Filial f5 = filialService.salvar(filial5);
            connection.close();
            statement.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        System.out.println("Hello world!");

    }
}