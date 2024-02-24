package Collections.List.ArrayList.add;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String[] names = {"Anna", "Bob", "Carol", "David", "Edna"};
        List<String> list = new ArrayList<>(Arrays.asList(names));

        list.add("Fred");

        System.out.println(list);
    }
}
