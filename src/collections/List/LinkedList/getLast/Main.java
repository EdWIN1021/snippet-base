package collections.List.LinkedList.getLast;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] strs = {"a", "b", "c", "d"};
        LinkedList<String> list = new LinkedList<>(List.of(strs));

        System.out.println(list.getLast());
    }
}
