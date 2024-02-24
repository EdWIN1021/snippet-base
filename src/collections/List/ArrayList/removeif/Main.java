package collections.List.ArrayList.removeif;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String[] names = {"Anna", "Bob", "Carol", "David", "Edna"};
        List<String> list = new ArrayList<>(Arrays.asList(names));

        list.removeIf(s -> s.charAt(0) == 'C');

        System.out.println(list);
    }
}
