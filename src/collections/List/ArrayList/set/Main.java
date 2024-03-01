package collections.List.ArrayList.set;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(List.of(1, 2, 3, 4, 5));
        list.set(0,10);

        System.out.println(list);
    }
}
