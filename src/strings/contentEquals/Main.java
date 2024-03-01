package strings.contentEquals;

public class Main {
    public static void main(String[] args) {

    /*
      check whether the content of a CharSequence (such as a String or StringBuilder)
      is equal to the content of another CharSequence.
     */
        String str = "Hello World";
        System.out.println(str.contentEquals("Hello World"));
    }
}
