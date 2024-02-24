package Collections.List.ArrayList.containsAll;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        var sub = list.subList(1,4);

        System.out.println(list.containsAll(sub));
    }
}

