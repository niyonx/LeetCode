import java.util.Stack;

public class RemoveOutermostParentheses {
    public String removeOuterParentheses(String S) {
        Stack<Character> stack = new Stack<Character>();
        StringBuilder b = new StringBuilder();
        int counter = 0;

        for (int i = 0; i < S.length(); i++) {
            stack.push(S.charAt(i));
            if (S.charAt(i) == '(')
                counter++;
            else
                counter--;
            if (counter == 0) {
                stack.pop();
                stack.pop();
            } else if ((counter == 1 && stack.peek() == ')') || counter > 1)
                b.append(stack.pop());
        }
        return b.toString();
    }

    public static void main(String[] args) {
        RemoveOutermostParentheses rop = new RemoveOutermostParentheses();
        System.out.println(rop.removeOuterParentheses("(()())(())"));
        System.out.println(rop.removeOuterParentheses("(()())(())(()(()))"));
        System.out.println(rop.removeOuterParentheses("()()"));
    }
}
