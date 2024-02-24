package collections.Collections.copy;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        // list2.length has to <= list1.length
        List<String> list1 = new ArrayList<>(Arrays.asList("a", "b", "c"));
        List<String> list2 = new ArrayList<>(Arrays.asList("d", "e"));

        Collections.copy(list1, list2);

        System.out.println(list2);


    }
}
