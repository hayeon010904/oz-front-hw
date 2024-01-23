class GenericQueue<T> {
  private queue: T[] = [];
  enqueue(item: T): void {
    this.queue.push(item);
  }
  dequeue(): T | undefined {
    return this.queue.shift();
  }
  peek(): T | undefined {
    return this.queue[0];
  }
  size(): number {
    return this.queue.length;
  }
}
// 테스트!
const colorQueue = new GenericQueue<string>();
console.log(colorQueue.enqueue("red"));
console.log(colorQueue.enqueue("orange"));
console.log(colorQueue.enqueue("yellow"));
console.log(colorQueue.dequeue());
console.log(colorQueue.peek());
console.log(colorQueue.size());

// 챌린지 과제 1
// 문제
// 제네릭을 활용하여 다양한 타입의 데이터를 처리할 수 있는 큐(Queue) 데이터 구
// 조를 구현해보세요.
// 학습목표
// 이 챌린지를 통해 제네릭의 기본 개념을 이해하고, 실제 데이터 구조에 적용하는
// 방법을 학습할 수 있습니다.
// 요구사항
// • 클래스 정의: GenericQueue<T>라는 이름의 클래스를 만듭니다( T는 제네릭
// 타입 매개변수입니다)
// • 메서드/속성 구현:
// 1. enqueue(item: T): 큐의 맨 끝에 새로운 아이템을 추가합니다.
// 2. dequeue(): 큐의 맨 앞에 있는 아이템을 제거하고 반환합니다. (큐가
// 비어있을 경우 undefined를 반환합니다)
// 3. peek(): 현재 큐에 맨 앞에 있는 아이템을 반환합니다
// 4. size(): 큐의 현재 크기 반환
// 제네릭클래스 큐 방식으로 동작하는 클래스
// 큐: 선형 자료구조: FIFO
