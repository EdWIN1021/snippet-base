package collections.List.ArrayList.replaceAll;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(List.of("Anna", "Bob", "Carol", "David", "Edna"));
        list.replaceAll(c -> c.charAt(0) + " " + c.toUpperCase());


        System.out.println(list);
    }
}
