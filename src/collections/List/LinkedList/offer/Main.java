package collections.List.LinkedList.offer;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] strs = {"a", "b", "c"};
        LinkedList<String> list = new LinkedList<>(List.of(strs));

        list.offer("d");
        System.out.println(list);
    }
}
