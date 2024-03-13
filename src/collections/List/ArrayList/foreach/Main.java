package collections.List.ArrayList.foreach;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(List.of("alpha", "bravo", "charlie", "delta"));
        list.forEach(System.out::println);
    }
}
