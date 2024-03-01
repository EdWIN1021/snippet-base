package collections.List.ArrayList.retainAll;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ArrayList<Character> list1 = new ArrayList<>(List.of('a','b','c'));
        ArrayList<Character> list2 = new ArrayList<>(List.of('b','c'));

        list1.retainAll(list2);

        System.out.println(list1);
    }
}
