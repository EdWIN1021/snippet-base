package collections.List.LinkedList.removeFirst;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] strs = {"a", "b", "c", "e"};
        LinkedList<String> list = new LinkedList<>(List.of(strs));

        list.removeFirst();

        System.out.println(list);
    }
}
