package Collections.List.copyOf;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list1 = new ArrayList<>(Arrays.asList("a", "b", "c"));

        // mutable
        List<String> list2 = List.copyOf(list1);

        // list2.add("d"); not allowed

        System.out.println(list2);
    }
}
