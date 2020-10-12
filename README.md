# DESIGN PATTERN

## 생성 패턴

### 팩토리 패턴

- **객체 생성 과정을 분리하여 처리한다 → 생성을 위임하는 클래스가 추가적으로 필요**
- 객체 생성 과정에서 발생하는 new 키워드의 문제점을 해결, 느슨한 객체 생성을 관리한다.
- 다양한 클래스의 객체 생성을 쉽게 처리한다.
- 생성하는 객체를 정의할 수 없거나, 변경이 있는 경우 객체 생성을 매우 유용하게 관리 가능하다.
- **단순 팩토리 패턴**은 추가적인 클래스를 만들지 않고, 메서드를 통해 객체 생성을 관리해 깔끔하게 연관 관계 해소 가능
- 팩토리 패턴 + 프록시 패턴 → 권한에 따른 접근 제어 가능

### 싱글턴 패턴

- **클래스 내에서 하나의 객체만 사용할 경우** 싱글턴 패턴을 활용한다.
- 프레임워크가 싱글턴 패턴을 폭넒게 사용한다.
- 의존관계가 있을 경우 의존 클래스 처리 → 싱글턴 객체 생성 순으로 처리한다.
- 멀티스레드 환경에서 경합성(생성 동시 요청) 발생 가능. → 늦은 바인딩 & 늦은 초기화 혹은 부팅 시 미리 처리하는 방법도 있다 (메모리 낭비)

### 팩토리 메서드 패턴

팩토리 패턴의 확장. 팩토리 + 템플릿 메서드 패턴의 결합 패턴

- 추상화를 사용해 객체를 생성하며, 상위 클래스에서 정의를 결정하고 하위 클래스에 구체적 처리를 위임
- 구조화를 통해 선언부와 실현 구현부를 서로 분리한다.
- 인터페이스를 통해 의존성을 낮추고, 일반적인 코드로 생성 패턴을 구현
- 프레임워크와 같은 응용프로그램에서 많이 이용
- 응용 프로그램에 클래스가 종속되지 않도록 관리가 가능하다. 왜냐하면 객체의 생성 과정을 캡슐화하고 이를 분리해 관리할 수 있기 때문이다.
