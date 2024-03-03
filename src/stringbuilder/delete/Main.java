package stringbuilder.delete;

public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello World");
        sb.delete(1,4);

        System.out.println(sb);
    }
}
