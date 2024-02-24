package collections.Collections.shuffle;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList( 1, 2, 3, 4, 5 ));

        Collections.shuffle(list);

        System.out.println(list);

    }
}
