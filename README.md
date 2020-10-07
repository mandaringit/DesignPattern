# DESIGN PATTERN

## 생성 패턴

### 팩토리 패턴

- **객체 생성 과정을 분리하여 처리한다 → 생성을 위임하는 클래스가 추가적으로 필요**
- 객체 생성 과정에서 발생하는 new 키워드의 문제점을 해결, 느슨한 객체 생성을 관리한다.
- 다양한 클래스의 객체 생성을 쉽게 처리한다.
- 생성하는 객체를 정의할 수 없거나, 변경이 있는 경우 객체 생성을 매우 유용하게 관리 가능하다.
- **단순 팩토리 패턴**은 추가적인 클래스를 만들지 않고, 메서드를 통해 객체 생성을 관리해 깔끔하게 연관 관계 해소 가능
- 팩토리 패턴 + 프록시 패턴 → 권한에 따른 접근 제어 가능
