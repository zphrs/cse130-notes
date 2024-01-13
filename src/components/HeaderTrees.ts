export type Tree = {
  text: string
  slug: string
  depth: number
  children: Tree[]
}

export function headersToTree(
  headings: { text: string; slug: string; depth: number }[],
  title: string
): Tree {
  const stack: Tree[] = [
    {
      text: title,
      slug: "#title",
      depth: 1,
      children: [],
    },
  ]
  const top = () => stack[stack.length - 1]
  for (let i = 0; i < headings.length; i++) {
    const node = {
      ...headings[i],
      children: [],
    }
    if (node.depth > top().depth) {
      top().children.push(node)
      stack.push(node)
    } else if (node.depth - 1 === top().depth) {
      top().children.push(node)
    } else {
      while (node.depth - 1 < top().depth && stack.length) {
        stack.pop()
      }
      top().children.push(node)
      stack.push(node)
    }
  }
  return stack[0]
}
