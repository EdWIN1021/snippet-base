package collections.Collections.fill;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1,2,3));

        // list.length has to gt 0
        Collections.fill(list, 10);

        System.out.println(list);
    }
}
