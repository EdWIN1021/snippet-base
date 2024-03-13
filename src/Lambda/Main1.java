package Lambda;

import java.util.ArrayList;
import java.util.List;

public class Main1 {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(List.of("alpha", "bravo", "charlie", "delta"));

        list.forEach(System.out::println);

        String prefix = "nato";
        list.forEach((var myString) -> {
            char first = myString.charAt(0);
            System.out.println(prefix + myString + " means " + first);
        });
    }
}
