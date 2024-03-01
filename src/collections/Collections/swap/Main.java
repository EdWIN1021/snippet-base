package collections.Collections.swap;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(List.of(1,2,3,4));
        Collections.swap(list,1,3);

        System.out.println(list);
    }
}
