package collections.List.LinkedList.peekLast;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] strs = {"a", "b", "c", "e"};
        LinkedList<String> list = new LinkedList<>(List.of(strs));

        System.out.println(list.peekLast());
    }
}
