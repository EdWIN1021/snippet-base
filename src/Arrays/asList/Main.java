package Arrays.asList;

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] arr = {"a", "b", "c"};

        // mutable: cannot add or remove elements from the list
        List<String> list = Arrays.asList(arr);
        list.set(0, "e");

        System.out.println(list);
    }
}
