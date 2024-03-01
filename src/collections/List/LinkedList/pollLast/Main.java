package collections.List.LinkedList.pollLast;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] strs = {"a", "b", "c", "d"};
        LinkedList<String> list = new LinkedList<>(List.of(strs));

        String bottom = list.pollLast();

        System.out.println(bottom);
        System.out.println(list);
    }
}
