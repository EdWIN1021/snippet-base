package Methods.varargs;

public class Main {
    public static void main(String[] args) {
        printText("a", "b","c");
    }

    public static void printText(String ... strs){
        for (String s : strs){
            System.out.println(s);
        }
    }
}
