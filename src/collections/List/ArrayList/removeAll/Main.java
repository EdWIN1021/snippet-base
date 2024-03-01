package collections.List.ArrayList.removeAll;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list1 = new ArrayList<>(List.of(1, 2, 3));
        ArrayList<Integer> list2 = new ArrayList<>(List.of(2, 3));

        list1.removeAll(list2);

        System.out.println(list1);
    }
}
