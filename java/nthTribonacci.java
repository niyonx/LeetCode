public class nthTribonacci {
    public int tribonacci(int n) {
        return triTail(n, 0, 1, 1);
    }

    public int triTail(int n, int a, int b, int c) {
        if (n == 0)
            return a;
        if (n == 1)
            return b;
        else
            return triTail(n - 1, b, c, a + b + c);
    }

    public static void main(String[] args) {
        nthTribonacci tri = new nthTribonacci();

        System.out.println(tri.tribonacci(4));
    }
}
