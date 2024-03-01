package collections.List.LinkedList.offerLast;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] strs = {"a", "b", "c"};
        LinkedList<String> list = new LinkedList<>(List.of(strs));

        list.offerLast("d");
        System.out.println(list);
    }
}
