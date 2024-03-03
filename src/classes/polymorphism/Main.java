package classes.polymorphism;

public class Main {
    public static void main(String[] args) {
        Movie theMovie = Movie.getMovie("Science", "Star Wars");
        theMovie.watchMovie();
    }
}
