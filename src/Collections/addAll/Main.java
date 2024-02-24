package Collections.addAll;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));
        Integer [] arr = new Integer[]{4, 5, 6};

        Collections.addAll(list, arr);

        System.out.println(list);
    }
}
