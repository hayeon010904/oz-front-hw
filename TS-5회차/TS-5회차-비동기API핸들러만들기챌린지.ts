// 문제
// 비동기 처리를 위한 제네릭 API 핸들러 클래스 구현하기

// 학습목표
// 제네릭과 비동기 프로그래밍을 활용하여 다양한 API 요청 처
// 리의 유연성과 타입 안정성을 향상시키는 방법을 학습

// 요구사항
// • 인터페이스 정의: ApiHandler 클래스의 인터페이스를 정의합니다 (클래스가 구현해야 하는
// 메서드를 명시)

// • 클래스 정의: ApiHandler<T>라는 이름의 클래스를 만듭니다( T는 제네릭 타입 매개변수입
// 니다)

// • 컨스트럭터 구현: 베이스 URL 을 매개변수로 받아 클래스 내부에 저장합니다

// • 메서드(비동기) 구현:

// 1. fetchData(endpoint: string): 전달된 엔드포인트에 전체 URL을 구성하여 (베이스
// URL + endpoint) 데이터를 가져오는 비동기 함수. (함수는 Promise<T>를 반환합
// 니다)

// 2. 에러 핸들링: 네트워크 오류 또는 데이터 파싱 오류시 적절한 예외 처리를 구현하세

// 요

// • 테스트 코드: main()

//인터페이스정의
interface MyApiHandler<T> {
  fetchData(endpoint: string): Promise<T>;
}

class ApiHandler<T> implements MyApiHandler<T> {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetchData(endpoint: string): Promise<T> {
    try {
      const url = this.baseUrl + endpoint;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("${response.status}");
      }
      const data: T = await response.json();
      return data;
    } catch (error) {
      throw new Error(`에러발생: ${error}`);
    }
  }
}
type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
//클래스 정의
// 메인함수
async function main() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const apiHandler = new ApiHandler<Post[]>(baseUrl);

  try {
    const posts: Post[] = await apiHandler.fetchData("/posts");
    posts.forEach((post) => console.log(post));
  } catch (error) {
    console.error(error);
  }
}
main()