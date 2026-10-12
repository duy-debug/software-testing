# Bài quiz — Kiểm thử phần mềm

## Question 1

Chọn **HAI** tình huống là **rủi ro sản phẩm** (Product Risk).

**Select one or more:**

- a. Hệ thống tính sai tiền học phí của sinh viên ✅ *(Đúng – ảnh hưởng đến chất lượng của chính phần mềm.)*
- b. Dữ liệu thẻ thanh toán của khách hàng có thể bị rò rỉ ✅ *(Đúng – ảnh hưởng đến chất lượng của chính phần mềm.)*
- c. Khách hàng liên tục thay đổi yêu cầu
- d. Môi trường kiểm thử bàn giao trễ 2 tuần
- e. Tester chủ chốt nghỉ việc giữa dự án

> Chính xác!
>
> Rủi ro dự án ảnh hưởng khả năng hoàn thành dự án đúng hạn; rủi ro sản phẩm ảnh hưởng chất lượng phần mềm. Rủi ro = Xác suất × Mức độ ảnh hưởng.
>
> The correct answers are: Hệ thống tính sai tiền học phí của sinh viên, Dữ liệu thẻ thanh toán của khách hàng có thể bị rò rỉ

---

## Question 2

Cho trích đoạn ma trận truy vết yêu cầu (RTM):

| Mã YC | Mô tả | Test Case |
|-------|-------|-----------|
| REQ-01 | Đăng nhập bằng email | TC-01, TC-02 |
| REQ-02 | Khóa tài khoản sau 3 lần sai | TC-03 |
| REQ-03 | Đổi mật khẩu | (trống) |

Thông tin quan trọng nhất mà RTM này cho thấy là gì?

**Select one:**

- a. TC-03 không truy vết được về yêu cầu nào
- b. Hệ thống đã sẵn sàng phát hành
- c. REQ-03 chưa được kiểm thử – có lỗ hổng bao phủ yêu cầu ✅ *(Chính xác. RTM giúp phát hiện yêu cầu chưa có Test Case.)*
- d. REQ-01 bị kiểm thử thừa vì có 2 Test Case

> Chính xác!
>
> RTM trả lời: mọi yêu cầu đã có Test Case chưa (độ bao phủ) và Test Case kiểm tra yêu cầu nào (truy vết ngược).
>
> The correct answer is: REQ-03 chưa được kiểm thử – có lỗ hổng bao phủ yêu cầu

---

## Question 3

Với yêu cầu 18 ≤ Tuổi ≤ 60 (Tuổi là số nguyên), áp dụng Phân tích giá trị biên theo phương pháp **2 giá trị** (ISTQB), tập giá trị kiểm thử nào là **ĐÚNG**?

**Select one:**

- a. 15, 30, 65
- b. 18, 60
- c. 17, 18, 60, 61 ✅ *(Chính xác: mỗi biên lấy giá trị trên biên và giá trị liền kề phía ngoài vùng.)*
- d. 17, 18, 19, 59, 60, 61

> Chính xác!
>
> BVA 2 giá trị: tại mỗi biên chọn giá trị ngay trên biên và giá trị liền kề thuộc phân vùng bên cạnh → 17, 18, 60, 61.
>
> The correct answer is: 17, 18, 60, 61

---

## Question 4

Yêu cầu: *Nhập sai mã PIN 3 lần thì khóa tài khoản; nhập đúng PIN thì đăng nhập thành công.* Hệ thống bắt đầu ở trạng thái S1 (Chờ nhập PIN). Người dùng thực hiện chuỗi sự kiện: **Sai → Sai → Đúng**. Trạng thái cuối cùng mong đợi là gì?

**Select one:**

- a. S3: Đăng nhập thành công ✅ *(Chính xác. Sau 2 lần sai hệ thống vẫn ở S1; lần nhập đúng chuyển sang S3.)*
- b. S1: Chờ nhập PIN
- c. Trạng thái không hợp lệ
- d. S2: Bị khóa

> Chính xác!
>
> S1 --Sai lần 1, 2--> S1; S1 --Sai lần 3--> S2 (Khóa); S1 --Đúng PIN--> S3 (Thành công).
>
> The correct answer is: S3: Đăng nhập thành công

---

## Question 5

Chọn **HAI** trường hợp **KHÔNG NÊN** tự động hóa kiểm thử.

**Select one or more:**

- a. Kiểm thử tải (Load test) với 5.000 người dùng ảo
- b. Đánh giá tính dễ sử dụng (Usability) của giao diện mới ✅ *(Đúng – Usability cần đánh giá của con người.)*
- c. Test Case chỉ chạy đúng một lần ✅ *(Đúng – chi phí viết script không được bù đắp.)*
- d. Bộ Test Case hồi quy chạy lại sau mỗi lần commit
- e. Tạo dữ liệu kiểm thử hàng loạt

> Chính xác!
>
> Nên tự động: hồi quy, happy path cốt lõi, hiệu năng/tải, setup dữ liệu. Không nên: TC chạy 1 lần, UI thay đổi liên tục, Usability, Exploratory.
>
> The correct answers are: Đánh giá tính dễ sử dụng (Usability) của giao diện mới, Test Case chỉ chạy đúng một lần

---

## Question 6

Yêu cầu: *Chỉ người từ 18 đến 60 tuổi (tính cả 18 và 60) mới được cấp bằng lái.* Áp dụng kỹ thuật Phân vùng tương đương (EP) cho đầu vào Tuổi, cần **tối thiểu** bao nhiêu Test Case để bao phủ tất cả các phân vùng?

**Select one:**

- a. 3 ✅ *(Chính xác: 1 vùng hợp lệ (18–60) và 2 vùng không hợp lệ (<18 và >60).)*
- b. 43
- c. 4
- d. 2

> Chính xác!
>
> Ba phân vùng: Tuổi < 18 (Invalid), 18 ≤ Tuổi ≤ 60 (Valid), Tuổi > 60 (Invalid). Mỗi vùng chọn 1 giá trị đại diện.
>
> The correct answer is: 3

---

## Question 7

Thống kê cho thấy phần lớn lỗi của một hệ thống bán hàng nằm trong module Thanh toán và module Khuyến mãi. Trưởng nhóm kiểm thử quyết định tăng cường Test Case cho hai module này ở đợt kiểm thử tiếp theo. Quyết định trên dựa chủ yếu vào nguyên lý nào?

**Select one:**

- a. Sự tập trung của lỗi (Quy tắc 80/20) ✅ *(Chính xác. Phần lớn lỗi thường nằm trong một số ít module, nên cần tập trung nỗ lực kiểm thử vào đó.)*
- b. Kiểm thử phụ thuộc ngữ cảnh
- c. Sự sai lầm về việc không có lỗi
- d. Kiểm thử cho thấy sự hiện diện của lỗi

> Chính xác!
>
> Nguyên lý 4 – Sự tập trung của lỗi: khoảng 80% bug thường nằm trong 20% module.
>
> The correct answer is: Sự tập trung của lỗi (Quy tắc 80/20)

---

## Question 8

Một lập trình viên hiểu sai yêu cầu nên viết điều kiện giảm giá sai trong mã nguồn. Khi khách hàng thanh toán, hệ thống hiển thị sai số tiền. Trình tự nào mô tả **ĐÚNG** mối quan hệ giữa các khái niệm?

**Select one:**

- a. Failure (hiểu sai yêu cầu) → Defect (điều kiện sai trong code) → Error (hiển thị sai số tiền)
- b. Error (hiểu sai yêu cầu) → Failure (điều kiện sai trong code) → Defect (hiển thị sai số tiền)
- c. Defect (hiểu sai yêu cầu) → Error (điều kiện sai trong code) → Failure (hiển thị sai số tiền)
- d. Error (hiểu sai yêu cầu) → Defect (điều kiện sai trong code) → Failure (hiển thị sai số tiền) ✅ *(Chính xác. Hành động sai của con người tạo ra khiếm khuyết, khiếm khuyết khi thực thi gây ra thất bại.)*

> Chính xác!
>
> Error (hành động của con người) → Defect/Bug (nằm trong code/tài liệu) → Failure (sự kiện khi thực thi).
>
> The correct answer is: Error (hiểu sai yêu cầu) → Defect (điều kiện sai trong code) → Failure (hiển thị sai số tiền)

---

## Question 9

Yêu cầu: *Khách hàng được miễn phí vận chuyển nếu là khách VIP **HOẶC** đơn hàng **trên 500.000 VNĐ**.* Một khách hàng **không phải** VIP đặt đơn hàng trị giá **đúng 500.000 VNĐ**. Kết quả mong đợi là gì?

**Select one:**

- a. Miễn phí vận chuyển
- b. Tính phí vận chuyển ✅ *(Chính xác. "Trên 500.000" nghĩa là > 500.000; 500.000 không thỏa, và khách không phải VIP (quy tắc R4: F, F).)*
- c. Không xác định được vì bảng quyết định không có quy tắc này
- d. Miễn phí một nửa phí vận chuyển

> Chính xác!
>
> C1 (VIP) = F, C2 (> 500.000) = F → hành động A2: Tính phí ship. Đây cũng là một điểm biên cần chú ý.
>
> The correct answer is: Tính phí vận chuyển

---

## Question 10

Câu hỏi *"Are we building the right product?"* (Chúng ta có đang xây dựng đúng sản phẩm mà người dùng cần không?) thể hiện khái niệm nào?

**Select one:**

- a. Validation (Xác nhận/Phê chuẩn) ✅ *(Chính xác. Validation kiểm tra sản phẩm có đáp ứng đúng nhu cầu người dùng.)*
- b. Static Analysis (Phân tích tĩnh)
- c. Verification (Kiểm chứng)
- d. Regression Testing (Kiểm thử hồi quy)

> Chính xác!
>
> Verification: đúng thiết kế (building the product right). Validation: đúng nhu cầu (building the right product).
>
> The correct answer is: Validation (Xác nhận/Phê chuẩn)

---

## Question 11

Với phần mềm điều khiển thiết bị y tế, mức độ độc lập kiểm thử nào được xem là khách quan nhất?

**Select one:**

- a. Developer tự kiểm thử mã của mình
- b. Các developer trong cùng nhóm kiểm thử chéo cho nhau
- c. Tổ chức kiểm thử độc lập thuê từ bên ngoài ✅ *(Chính xác. Đây là mức độc lập cao nhất, thường bắt buộc với hệ thống y tế, hàng không, tài chính cốt lõi.)*
- d. Nhóm kiểm thử độc lập trong nội bộ công ty

> Chính xác!
>
> 4 mức độc lập: Dev tự test → Dev test chéo → Team test nội bộ → Tổ chức độc lập bên ngoài.
>
> The correct answer is: Tổ chức kiểm thử độc lập thuê từ bên ngoài

---

## Question 12

Khi viết Unit Test cho hàm `getUserStatus(apiClient, userId)`, lập trình viên cần xác nhận rằng hàm `apiClient.fetch` **đã được gọi đúng một lần** với tham số `userId = 123`. Đối tượng giả lập nào phù hợp nhất?

**Select one:**

- a. Mock ✅ *(Chính xác. Mock dùng để kiểm tra hành vi: hàm có được gọi, gọi bao nhiêu lần, với tham số nào.)*
- b. Driver
- c. Stub
- d. Test Oracle

> Chính xác!
>
> Stub: trả về dữ liệu cứng. Mock: kiểm tra hành vi (hàm có được gọi đúng tham số không).
>
> The correct answer is: Mock

---

## Question 13

Khi kiểm thử tự động một chatbot tư vấn tuyển sinh dùng LLM/RAG, vì sao **không nên** so sánh câu trả lời bằng khớp chuỗi chính xác (Exact Match)?

**Select one:**

- a. Vì hệ thống phi tất định: cùng một câu hỏi có thể sinh câu trả lời với văn phong khác nhau, nên cần đánh giá theo ngữ nghĩa hoặc dùng LLM làm giám khảo ✅ *(Chính xác. Đây là "bài toán Oracle" của hệ thống AI.)*
- b. Vì hệ thống AI không thể kiểm thử tự động
- c. Vì Exact Match chạy quá chậm so với LLM Judge
- d. Vì chatbot luôn trả lời giống hệt nhau nên không cần kiểm thử

> Chính xác!
>
> Hệ thống truyền thống: tất định, Pass/Fail theo Exact Match. Hệ thống LLM: phi tất định, khó xác định Expected Result tuyệt đối (bài toán Oracle).
>
> The correct answer is: Vì hệ thống phi tất định: cùng một câu hỏi có thể sinh câu trả lời với văn phong khác nhau, nên cần đánh giá theo ngữ nghĩa hoặc dùng LLM làm giám khảo

---

## Question 14

Theo tháp kiểm thử tự động của Mike Cohn, phát biểu nào là **ĐÚNG**?

**Select one:**

- a. Nên có nhiều Unit Test nhất vì chạy nhanh, chi phí bảo trì thấp và dễ cách ly lỗi ✅ *(Chính xác.)*
- b. API Test chạy chậm hơn UI Test vì phải xử lý JSON/XML
- c. Nên có nhiều UI Test nhất vì chúng mô phỏng chính xác người dùng thật
- d. Tự động hóa kiểm thử đồng nghĩa với tự động click trên giao diện Web

> Chính xác!
>
> Tháp: Unit (~70%) → API/Service (~20%) → UI (~10%). Càng lên đỉnh càng chậm, đắt và dễ gãy.
>
> The correct answer is: Nên có nhiều Unit Test nhất vì chạy nhanh, chi phí bảo trì thấp và dễ cách ly lỗi

---

## Question 15

Công cụ phân tích tĩnh (như ESLint, SonarQube) **KHÔNG** thể phát hiện vấn đề nào sau đây?

**Select one:**

- a. Câu lệnh nằm sau lệnh return nên không bao giờ được thực thi
- b. Biến được khai báo và gán giá trị nhưng không bao giờ được sử dụng
- c. Trang web phản hồi chậm khi có 1.000 người dùng truy cập cùng lúc ✅ *(Chính xác. Vấn đề hiệu năng chỉ bộc lộ khi thực thi – cần kiểm thử động (Load test).)*
- d. Mật khẩu/API key được viết cứng (hardcode) trong mã nguồn

> Chính xác!
>
> Static Analysis quét code mà không chạy: vi phạm coding standard, biến rác, code không chạy tới, rủi ro bảo mật. Vấn đề hiệu năng cần kiểm thử động.
>
> The correct answer is: Trang web phản hồi chậm khi có 1.000 người dùng truy cập cùng lúc

---

## Question 16

Hai ngày trước lễ ra mắt, tester phát hiện **tên trường đại học trên trang chủ bị viết sai chính tả**. Lỗi không ảnh hưởng đến bất kỳ chức năng nào. Cách phân loại hợp lý nhất là gì?

**Select one:**

- a. Severity thấp, Priority cao ✅ *(Chính xác. Về kỹ thuật lỗi không làm hỏng hệ thống, nhưng về kinh doanh cần sửa ngay.)*
- b. Severity cao, Priority thấp
- c. Severity cao, Priority cao
- d. Severity thấp, Priority thấp

> Chính xác!
>
> Severity: góc nhìn kỹ thuật (mức độ hỏng hệ thống). Priority: góc nhìn kinh doanh (cần sửa ngay hay không).
>
> The correct answer is: Severity thấp, Priority cao

---

## Question 17

Developer vừa sửa lỗi "không áp dụng được mã giảm giá". Tester chạy lại **chính Test Case đã phát hiện lỗi đó** để kiểm tra lỗi đã được sửa. Sau đó, tester chạy thêm các Test Case của module Giỏ hàng và Thanh toán để chắc chắn bản sửa không làm hỏng chức năng khác. Hai hoạt động trên lần lượt là gì?

**Select one:**

- a. Smoke Test, sau đó Acceptance Test
- b. Confirmation Test (Re-test), sau đó Regression Test ✅ *(Chính xác.)*
- c. Regression Test, sau đó Confirmation Test
- d. Cả hai đều là Regression Test

> Chính xác!
>
> Change-related testing gồm Confirmation Test (xác nhận lỗi đã sửa) và Regression Test (đảm bảo thay đổi không gây lỗi mới ở chỗ khác).
>
> The correct answer is: Confirmation Test (Re-test), sau đó Regression Test

---

## Question 18

Một chức năng xét duyệt học bổng phụ thuộc vào **3 điều kiện**, mỗi điều kiện chỉ nhận giá trị Đúng/Sai (T/F). Bảng quyết định đầy đủ (chưa rút gọn) sẽ có bao nhiêu quy tắc (Rules)?

**Select one:**

- a. 8 ✅ *(Chính xác: 2³ = 8 tổ hợp.)*
- b. 9
- c. 3
- d. 6

> Chính xác!
>
> Với n điều kiện nhị phân, bảng quyết định đầy đủ có 2ⁿ quy tắc.
>
> The correct answer is: 8

---

## Question 19

Hoạt động nào sau đây thể hiện tư duy **Shift-Right**?

**Select one:**

- a. Chạy phân tích tĩnh bằng ESLint ngay khi viết code
- b. Thực hiện A/B Testing và theo dõi log lỗi của người dùng thật sau khi phát hành ✅ *(Chính xác. Shift-Right đẩy kiểm thử về sau khi release.)*
- c. Viết Unit Test theo phương pháp TDD
- d. Review tài liệu đặc tả yêu cầu trước khi lập trình

> Chính xác!
>
> Shift-Left: kiểm thử sớm (review, unit test, static analysis). Shift-Right: sau release (A/B testing, monitoring in production).
>
> The correct answer is: Thực hiện A/B Testing và theo dõi log lỗi của người dùng thật sau khi phát hành

---

## Question 20

Cho đoạn mã:

```js
function calculateDiscount(amount) {
  let discount = 0;
  if (amount > 1000) {
    discount = 10;
  }
  return discount;
}
```

Chỉ chạy **một** Test Case với `amount = 2000`. Độ bao phủ lệnh (Statement Coverage) và độ bao phủ quyết định (Decision Coverage) lần lượt là bao nhiêu?

**Select one:**

- a. Statement Coverage 100%, Decision Coverage 50% ✅ *(Chính xác. Mọi lệnh đều chạy qua, nhưng chỉ đi nhánh True, bỏ sót nhánh False.)*
- b. Statement Coverage 75%, Decision Coverage 50%
- c. Statement Coverage 100%, Decision Coverage 100%
- d. Statement Coverage 50%, Decision Coverage 100%

> Chính xác!
>
> TC amount = 2000 chạy qua cả 4 lệnh (100% Statement) nhưng chỉ đi 1/2 kết quả của quyết định (50% Decision).
>
> The correct answer is: Statement Coverage 100%, Decision Coverage 50%

---

## Question 21 *(sai – được chọn: b)*

Trường Mật khẩu yêu cầu độ dài từ 8 đến 16 ký tự. Tập độ dài nào dưới đây bao phủ **tất cả** các phân vùng tương đương với **số lượng giá trị ít nhất**?

**Select one:**

- a. 7, 8, 16, 17
- b. 0, 12 ❌ *(đã chọn – sai: Bỏ sót vùng không hợp lệ phía trên (>16 ký tự).)*
- c. 8, 12, 16
- d. 5, 12, 20 ✅ *(đáp án đúng)*

> Chưa chính xác.
>
> Ba phân vùng: độ dài < 8 (Invalid), 8–16 (Valid), > 16 (Invalid) → tối thiểu 3 giá trị.
>
> The correct answer is: 5, 12, 20

---

## Question 22

Nhóm có 200 file kịch bản kiểm thử dùng chung trang Đăng nhập. Nhà phát triển đổi `id` của ô tên đăng nhập. Nếu dự án áp dụng đúng Page Object Model (POM), cần sửa mã ở đâu?

**Select one:**

- a. Sửa các câu lệnh Assertion trong Test Class
- b. Chỉ sửa locator trong lớp trang (VD: LoginPage.js) ✅ *(Chính xác. Đây là lợi ích chính của POM.)*
- c. Sửa file cấu hình CI/CD
- d. Sửa toàn bộ 200 file kịch bản kiểm thử

> Chính xác!
>
> POM: Page Class chứa locator và thao tác; Test Class chứa logic kiểm thử. Giao diện đổi chỉ cần sửa một nơi.
>
> The correct answer is: Chỉ sửa locator trong lớp trang (VD: LoginPage.js)

---

## Question 23

Một trang thanh toán có 3 tham số: Trình duyệt (4 giá trị), Hệ điều hành (3 giá trị), Phương thức thanh toán (2 giá trị). Số tổ hợp đầy đủ là bao nhiêu và bộ test Pairwise cần **ít nhất** bao nhiêu Test Case?

**Select one:**

- a. 24 tổ hợp đầy đủ; Pairwise cần ít nhất 9 Test Case
- b. 24 tổ hợp đầy đủ; Pairwise cần ít nhất 12 Test Case ✅ *(Chính xác: 4×3×2 = 24. Mọi cặp (Trình duyệt, Hệ điều hành) phải xuất hiện ít nhất một lần nên cần ít nhất 4×3 = 12.)*
- c. 9 tổ hợp đầy đủ; Pairwise cần ít nhất 4 Test Case
- d. 24 tổ hợp đầy đủ; Pairwise cần đủ 24 Test Case

> Chính xác!
>
> Pairwise đảm bảo mọi cặp giá trị của 2 tham số bất kỳ xuất hiện ít nhất một lần; số Test Case tối thiểu ≥ tích số giá trị của hai tham số lớn nhất.
>
> The correct answer is: 24 tổ hợp đầy đủ; Pairwise cần ít nhất 12 Test Case

---

## Question 24

Hệ thống quản lý sinh viên đang chạy thật (Production) được chuyển từ máy chủ Windows Server sang Linux và nâng cấp phiên bản cơ sở dữ liệu. Trước khi thực hiện kiểm thử hồi quy, nhóm kiểm thử **BẮT BUỘC** phải làm gì để xác định phạm vi test hợp lý?

**Select one:**

- a. Phân tích tác động (Impact Analysis) ✅ *(Chính xác. Phân tích tác động giúp quyết định phạm vi kiểm thử hồi quy hiệu quả.)*
- b. Chỉ chạy Unit Test vì đây là thay đổi môi trường
- c. Viết lại toàn bộ Test Case từ đầu
- d. Kiểm thử chấp nhận Alpha

> Chính xác!
>
> Kiểm thử bảo trì (Enhancement, Corrective, Environmental) yêu cầu Impact Analysis để quyết định phạm vi test hồi quy.
>
> The correct answer is: Phân tích tác động (Impact Analysis)

---

## Question 25

Trong quy trình kiểm thử cơ bản, hoạt động trả lời câu hỏi "Đã đủ điều kiện phát hành (release) chưa?" là hoạt động nào?

**Select one:**

- a. Phân tích và thiết kế
- b. Đánh giá tiêu chí kết thúc ✅ *(Chính xác. Hoạt động này so sánh kết quả với tiêu chí kết thúc để quyết định có dừng test/release hay không.)*
- c. Đóng quy trình
- d. Lập kế hoạch và kiểm soát

> Chính xác!
>
> 5 hoạt động: Lập kế hoạch & kiểm soát → Phân tích & thiết kế → Thực thi → Đánh giá tiêu chí kết thúc → Đóng quy trình.
>
> The correct answer is: Đánh giá tiêu chí kết thúc

---

## Question 26

Điều nào sau đây là một tiêu chí kết thúc (Exit Criteria) điển hình trong Test Plan?

**Select one:**

- a. Môi trường kiểm thử đã được thiết lập xong
- b. Số lỗi mức Critical chưa được sửa bằng 0 ✅ *(Chính xác.)*
- c. Tài liệu yêu cầu đã được chốt
- d. Developer đã chạy xong Unit Test

> Chính xác!
>
> Entry: khi nào được bắt đầu test. Exit: khi nào được dừng test (100% TC đã chạy, 0 bug Critical, đạt coverage yêu cầu).
>
> The correct answer is: Số lỗi mức Critical chưa được sửa bằng 0

---

## Question 27

Một nhóm kiểm thử chạy lại cùng một bộ Test Case suốt 10 sprint liên tiếp. Ba sprint gần nhất bộ test không phát hiện thêm lỗi nào, nhưng người dùng vẫn báo lỗi mới sau mỗi lần phát hành. Nguyên lý kiểm thử nào giải thích tốt nhất hiện tượng này?

**Select one:**

- a. Sự tập trung của lỗi (Defect clustering)
- b. Kiểm thử phụ thuộc ngữ cảnh
- c. Nghịch lý thuốc trừ sâu (Pesticide paradox) ✅ *(Chính xác. Bộ test lặp lại mãi sẽ mất khả năng tìm lỗi mới; cần review và cập nhật liên tục.)*
- d. Kiểm thử cạn kiệt là không thể

> Chính xác!
>
> Nguyên lý 5 – Nghịch lý thuốc trừ sâu: lặp lại một tập Test Case cũ sẽ không tìm ra bug mới; cần liên tục review và cập nhật.
>
> The correct answer is: Nghịch lý thuốc trừ sâu (Pesticide paradox)

---

## Question 28

Một dự án Agile có tài liệu yêu cầu chưa hoàn thiện. Tester vừa tìm hiểu hệ thống, vừa thiết kế và thực thi các phép thử cùng một lúc, dựa trên kinh nghiệm của bản thân. Đây là kỹ thuật nào?

**Select one:**

- a. Kiểm thử thăm dò (Exploratory Testing) ✅ *(Chính xác. Learn – Design – Execute diễn ra đồng thời.)*
- b. Bao phủ quyết định (Decision Coverage)
- c. Đoán lỗi (Error Guessing)
- d. Bảng quyết định (Decision Table)

> Chính xác!
>
> Exploratory Testing thuộc nhóm kỹ thuật dựa trên kinh nghiệm; rất phù hợp khi tài liệu chưa hoàn thiện.
>
> The correct answer is: Kiểm thử thăm dò (Exploratory Testing)

---

## Question 29

Nhóm kiểm thử đang kiểm tra luồng dữ liệu khi ứng dụng mua hàng của công ty gửi yêu cầu sang API thanh toán của VNPAY và nhận kết quả trả về. Đây là cấp độ kiểm thử nào?

**Select one:**

- a. Kiểm thử chấp nhận người dùng (UAT)
- b. Kiểm thử tích hợp hệ thống (System Integration Testing) ✅ *(Chính xác. Đây là tích hợp giữa hai hệ thống khác nhau.)*
- c. Kiểm thử tích hợp thành phần (Component Integration Testing)
- d. Kiểm thử đơn vị (Unit Testing)

> Chính xác!
>
> Component Integration: trong cùng hệ thống. System Integration: giữa các hệ thống khác nhau (VD: app gọi API MoMo/VNPAY).
>
> The correct answer is: Kiểm thử tích hợp hệ thống (System Integration Testing)

---

## Question 30

Một kịch bản Playwright lúc Pass lúc Fail dù mã nguồn và môi trường không đổi, do script bấm vào nút "Xác nhận" trước khi API trả dữ liệu về. Cách khắc phục nào phù hợp nhất?

**Select one:**

- a. Đánh dấu bỏ qua (skip) Test Case này vĩnh viễn
- b. Chuyển locator từ getByRole sang XPath
- c. Dùng cơ chế Auto-wait của Playwright và chờ theo điều kiện, ví dụ `await page.waitForResponse(...)` ✅ *(Chính xác. Chờ theo trạng thái/sự kiện thực tế thay vì chờ cứng.)*
- d. Thêm `await page.waitForTimeout(5000)` trước mỗi thao tác

> Chính xác!
>
> Tuyệt đối không dùng hard sleep. Auto-wait khắc phục phần lớn flaky test; Explicit wait dùng để chờ một sự kiện cụ thể.
>
> The correct answer is: Dùng cơ chế Auto-wait của Playwright và chờ theo điều kiện, ví dụ `await page.waitForResponse(...)`

---

## Question 31

Phát biểu nào về độ bao phủ hộp trắng là **ĐÚNG**?

**Select one:**

- a. Đạt 100% Statement Coverage sẽ đảm bảo 100% Decision Coverage
- b. Đạt 100% Decision Coverage sẽ đảm bảo 100% Statement Coverage, nhưng điều ngược lại không đúng ✅ *(Chính xác.)*
- c. Decision Coverage và Statement Coverage luôn có giá trị bằng nhau
- d. Statement Coverage là tiêu chí mạnh nhất trong kiểm thử hộp trắng

> Chính xác!
>
> Quy tắc vàng: 100% Decision Coverage ⇒ 100% Statement Coverage (không có chiều ngược lại).
>
> The correct answer is: Đạt 100% Decision Coverage sẽ đảm bảo 100% Statement Coverage, nhưng điều ngược lại không đúng

---

## Question 32

Một sinh viên trưởng nhóm đồ án tổ chức buổi họp, tự mình trình bày lần lượt từng phần của tài liệu đặc tả yêu cầu cho các thành viên và giảng viên hướng dẫn, đồng thời ghi nhận góp ý. Đây là loại hình review nào?

**Select one:**

- a. Inspection
- b. Walkthrough ✅ *(Chính xác. Tác giả dẫn dắt nhóm đi qua tài liệu để giải thích và thu thập ý kiến.)*
- c. Informal Review
- d. Static Analysis

> Chính xác!
>
> Walkthrough: tác giả dẫn dắt team đi qua từng phần của tài liệu/code để giải thích và thu thập ý kiến.
>
> The correct answer is: Walkthrough

---

## Question 33

Xét đoạn mã sau, được viết cho yêu cầu 18 ≤ Tuổi ≤ 60:

```js
function checkDrivingLicense(age) {
  if (age > 18 && age <= 60) {
    return "Allowed";
  }
  return "Denied";
}
```

Giá trị đầu vào nào sẽ phát hiện được lỗi trong đoạn mã trên?

**Select one:**

- a. 61
- b. 60
- c. 30
- d. 18 ✅ *(Chính xác. Với age = 18, mong đợi "Allowed" nhưng code trả về "Denied" do dùng > thay vì >=.)*

> Chính xác!
>
> Developer thường sai ở dấu so sánh tại biên (> thay vì >=). Đây là lý do BVA hiệu quả hơn việc chọn giá trị giữa vùng.
>
> The correct answer is: 18

---

## Question 34

Loại hình review nào có quy trình khắt khe nhất, có Moderator điều phối và dựa trên các Checklist tiêu chuẩn?

**Select one:**

- a. Inspection (Thanh tra) ✅ *(Chính xác.)*
- b. Walkthrough
- c. Technical Review
- d. Informal Review

> Chính xác!
>
> Từ không chính thức đến chính thức: Informal Review → Walkthrough → Technical Review → Inspection.
>
> The correct answer is: Inspection (Thanh tra)

---

## Question 35

Chọn **HAI** phát biểu **ĐÚNG** về kiểm thử tĩnh (Static Testing).

**Select one or more:**

- a. Kiểm thử tĩnh chỉ áp dụng được cho mã nguồn đã biên dịch
- b. Kiểm thử tĩnh phát hiện Failure khi phần mềm đang chạy
- c. Kiểm thử tĩnh chỉ nên thực hiện sau khi kiểm thử hệ thống kết thúc
- d. Kiểm thử tĩnh phát hiện trực tiếp Defect, kể cả trong tài liệu yêu cầu và bản thiết kế ✅ *(Đúng.)*
- e. Kiểm thử tĩnh không thực thi mã nguồn ✅ *(Đúng.)*

> Chính xác!
>
> Kiểm thử tĩnh: không thực thi code, áp dụng cho tài liệu và mã nguồn, phát hiện Defect trực tiếp. Kiểm thử động: thực thi code, phát hiện Failure.
>
> The correct answers are: Kiểm thử tĩnh không thực thi mã nguồn, Kiểm thử tĩnh phát hiện trực tiếp Defect, kể cả trong tài liệu yêu cầu và bản thiết kế

---

## Question 36

Khi kiểm thử API, tester gửi yêu cầu lấy thông tin hồ sơ cá nhân nhưng **không kèm token xác thực**. Mã trạng thái nào là kết quả mong đợi hợp lý nhất?

**Select one:**

- a. 201 Created
- b. 500 Internal Server Error
- c. 200 OK
- d. 401 Unauthorized ✅ *(Chính xác. Lỗi phía client do chưa xác thực.)*

> Chính xác!
>
> 2xx: thành công; 4xx: lỗi phía client (400, 401, 403, 404); 5xx: lỗi phía server.
>
> The correct answer is: 401 Unauthorized

---

## Question 37

Trong một buổi review chính thức, ai chịu trách nhiệm **ghi chép các lỗi được tìm thấy** và các quyết định đưa ra?

**Select one:**

- a. Scribe (Thư ký) ✅ *(Chính xác.)*
- b. Moderator/Facilitator (Người điều phối)
- c. Manager (Quản lý)
- d. Author (Tác giả)

> Chính xác!
>
> Các vai trò: Author, Moderator/Facilitator, Reviewer, Scribe, Manager.
>
> The correct answer is: Scribe (Thư ký)

---

## Question 38

Một hệ thống quản lý thư viện vượt qua 100% Test Case và không còn lỗi nào được ghi nhận. Tuy nhiên sau khi triển khai, thủ thư từ chối sử dụng vì quy trình mượn–trả sách trên phần mềm không khớp với quy trình làm việc thực tế. Tình huống này minh họa nguyên lý nào?

**Select one:**

- a. Nghịch lý thuốc trừ sâu
- b. Kiểm thử sớm (Shift-left)
- c. Sự sai lầm về việc không có lỗi (Absence-of-errors fallacy) ✅ *(Chính xác. Không có bug nhưng không đáp ứng nhu cầu người dùng thì phần mềm vẫn thất bại.)*
- d. Kiểm thử cho thấy sự hiện diện của lỗi

> Chính xác!
>
> Nguyên lý 7: Phần mềm không có bug nhưng không đáp ứng đúng nhu cầu người dùng thì vẫn là phần mềm thất bại.
>
> The correct answer is: Sự sai lầm về việc không có lỗi (Absence-of-errors fallacy)

---

## Question 39

Phát biểu nào mô tả **ĐÚNG** đặc trưng của mô hình chữ V (V-Model)?

**Select one:**

- a. Tính năng được giao liên tục qua các vòng lặp ngắn 2–4 tuần
- b. Mô hình rất linh hoạt, dễ dàng phản ứng khi yêu cầu thay đổi giữa chừng
- c. Kiểm thử chỉ bắt đầu sau khi toàn bộ mã nguồn đã hoàn thành
- d. Mỗi giai đoạn phát triển có một cấp độ kiểm thử tương ứng, nhờ đó kiểm thử được lên kế hoạch từ rất sớm ✅ *(Chính xác.)*

> Chính xác!
>
> V-Model mở rộng Waterfall: mỗi giai đoạn phát triển ứng với một cấp độ kiểm thử; ưu điểm shift-left, nhược điểm thiếu linh hoạt.
>
> The correct answer is: Mỗi giai đoạn phát triển có một cấp độ kiểm thử tương ứng, nhờ đó kiểm thử được lên kế hoạch từ rất sớm

---

## Question 40

Yêu cầu nào sau đây sẽ được kiểm tra bằng kiểm thử phi chức năng (Non-functional testing)?

**Select one:**

- a. Hệ thống khóa tài khoản sau 3 lần nhập sai mã PIN
- b. Trang chủ phải tải xong trong vòng 2 giây khi có 1.000 người truy cập đồng thời ✅ *(Chính xác. Đây là yêu cầu hiệu năng/tải – hệ thống "làm tốt thế nào".)*
- c. Hệ thống phải tính đúng tổng tiền đơn hàng bao gồm thuế VAT
- d. Người dùng có thể đổi mật khẩu sau khi đăng nhập

> Chính xác!
>
> Functional: hệ thống làm gì. Non-functional: hệ thống làm tốt thế nào (Performance, Load, Security, Usability).
>
> The correct answer is: Trang chủ phải tải xong trong vòng 2 giây khi có 1.000 người truy cập đồng thời

---

# Trắc nghiệm cuối buổi 1

## Câu 1 (slide 1/2)

Trường Số lượng nhận số nguyên từ 1 đến 99. Bộ giá trị nào đúng với BVA 2 giá trị?

- A. {1, 99}
- B. {0, 1, 99, 100} ✅ *(Chính xác. BVA 2 giá trị: mỗi biên lấy giá trị trên biên và giá trị liền kề phía ngoài vùng.)*
- C. {0, 1, 2, 98, 99, 100}
- D. {1, 50, 99}

> Chính xác!
>
> BVA 2 giá trị: tại mỗi biên chọn giá trị ngay trên biên và giá trị liền kề thuộc phân vùng bên cạnh → {0, 1, 99, 100}.
>
> The correct answer is: B. {0, 1, 99, 100}

---

## Câu 2 (slide 1/2)

Với cùng trường trên, BVA 3 giá trị cần bao nhiêu giá trị?

- A. 4  B. 5  C. 6 ✅ *(Chính xác. BVA 3 giá trị: mỗi biên lấy 3 giá trị — trên biên, trong vùng và ngoài vùng → 2 biên × 3 = 6.)*  D. 8

> Chính xác!
>
> BVA 3 giá trị tại mỗi biên chọn: giá trị ngay trên biên, giá trị liền kề phía trong vùng và giá trị liền kề phía ngoài vùng → {0, 1, 2, 98, 99, 100}, tổng 6 giá trị.
>
> The correct answer is: C. 6

---

## Câu 3 (slide 1/2)

Trường Tuổi có ba vùng: dưới 18, từ 18 đến 60, trên 60. Số ca tối thiểu đạt 100% bao phủ phân vùng là:

- A. 1  B. 2  C. 3 ✅ *(Chính xác. EP: mỗi phân vùng chọn 1 giá trị đại diện → 3 vùng = 3 ca.)*  D. 6

> Chính xác!
>
> Phân vùng tương đương: mỗi vùng chỉ cần 1 giá trị đại diện. Ba vùng (dưới 18, 18–60, trên 60) → tối thiểu 3 ca.
>
> The correct answer is: C. 3

---

## Câu 4 (slide 1/2)

Vì sao không nên đặt hai giá trị không hợp lệ trong cùng một ca kiểm thử?

- A. Vì ca kiểm thử sẽ chạy chậm hơn
- B. Vì lỗi của giá trị này có thể che lỗi của giá trị kia ✅ *(Chính xác. Giá trị không hợp lệ đầu tiên sẽ khiến ca kiểm thử dừng/báo lỗi chung, che mất lỗi của giá trị thứ hai.)*
- C. Vì ISTQB cấm dùng giá trị không hợp lệ
- D. Vì giá trị không hợp lệ không có kết quả mong đợi

> Chính xác!
>
> Nguyên tắc: mỗi ca kiểm thử chỉ chứa một giá trị không hợp lệ, vì lỗi của giá trị này có thể "che" lỗi của giá trị kia (error masking), khiến ta không biết được giá trị nào mới là nguyên nhân thật sự.
>
> The correct answer is: B. Vì lỗi của giá trị này có thể che lỗi của giá trị kia

---

## Câu 5 (slide 2/2, buổi 1)

BVA **không** phù hợp với trường nào?

- A. Tuổi
- B. Ngày sinh
- C. Phương thức thanh toán (Thẻ / Ví / Tiền mặt) ✅ *(Chính xác. BVA chỉ áp dụng cho miền giá trị có thứ tự; các giá trị rời rạc không có thứ tự thì không có "biên".)*
- D. Số tiền

> Chính xác!
>
> BVA áp dụng cho các miền có thứ tự (số, ngày tháng, độ dài chuỗi). Phương thức thanh toán là tập giá trị rời rạc, không có thứ tự nên không tồn tại giá trị biên.
>
> The correct answer is: C. Phương thức thanh toán (Thẻ / Ví / Tiền mặt)

---

## Câu 6 (slide 2/2, buổi 1)

"Giảm giá cho đơn hàng **trên 1.000.000đ**". Giá đơn hàng tính theo bội số 1.000đ. Giá trị nhỏ nhất được giảm giá là:

- A. 999.000  B. 1.000.000  C. 1.001.000 ✅ *(Chính xác. "Trên 1.000.000" nghĩa là > 1.000.000; giá đơn hàng là bội số của 1.000đ nên giá trị nhỏ nhất thỏa mãn là 1.001.000.)*  D. 1.000.001

> Chính xác!
>
> "Trên 1.000.000" nghĩa là > 1.000.000 (nghiêm ngặt), không bao gồm 1.000.000. Vì giá đơn hàng chỉ là bội số của 1.000đ nên giá trị hợp lệ nhỏ nhất được giảm giá là 1.001.000.
>
> The correct answer is: C. 1.001.000

---

## Câu 7 (slide 2/2, buổi 1)

Có 4 giá trị biên cần kiểm thử, bộ ca hiện tại đã thực thi 3 giá trị. Độ bao phủ giá trị biên là:

- A. 25%  B. 50%  C. 75% ✅ *(Chính xác. Độ bao phủ giá trị biên = 3/4 = 75%.)*  D. 100%

> Chính xác!
>
> Độ bao phủ giá trị biên = số giá trị biên đã thực thi / tổng số giá trị biên = 3 / 4 = 75%.
>
> The correct answer is: C. 75%

---

## Câu 8 (slide 2/2, buổi 1)

Đã có ca Tuổi = 30 cho vùng 18–60. Thêm ca Tuổi = 45 làm độ bao phủ phân vùng tăng thêm:

- A. 0% ✅ *(Chính xác. EP: mỗi phân vùng chỉ cần 1 giá trị đại diện; thêm giá trị thứ hai trong cùng vùng không tăng độ bao phủ phân vùng.)*  B. 25%  C. 33%  D. 50%

> Chính xác!
>
> Phân vùng tương đương: một khi một vùng đã có giá trị đại diện (Tuổi = 30 cho vùng 18–60), thêm bất kỳ giá trị nào khác trong cùng vùng (Tuổi = 45) đều không làm tăng độ bao phủ phân vùng.
>
> The correct answer is: A. 0%

---

# Trắc nghiệm cuối buổi 2

## Câu 1 (slide 1/2)

Bảng quyết định có 4 điều kiện Boolean. Bảng đầy đủ có bao nhiêu cột?

- A. 4  B. 8  C. 16 ✅ *(Chính xác: 2⁴ = 16 tổ hợp.)*  D. 32

> Chính xác!
>
> Với n điều kiện nhị phân, bảng quyết định đầy đủ có 2ⁿ cột (quy tắc). n = 4 → 16 cột.
>
> The correct answer is: C. 16

---

## Câu 2 (slide 1/2)

Trong bảng rút gọn của 3 điều kiện, một cột có hai ô "–". Cột này đại diện cho bao nhiêu cột của bảng đầy đủ?

- A. 1  B. 2  C. 3  D. 4 ✅ *(Chính xác. Mỗi ô "–" (don't care) nhân đôi số cột mà cột rút gọn đại diện: 2² = 4.)*

> Chính xác!
>
> Mỗi ô "–" có thể nhận cả hai giá trị T/F, nên một cột rút gọn có k ô "–" đại diện cho 2ᵏ cột của bảng đầy đủ. Với 2 ô "–" → 2² = 4 cột.
>
> The correct answer is: D. 4

---

## Câu 3 (slide 1/2)

Độ bao phủ bảng quyết định được tính bằng:

- A. Số điều kiện đã kiểm thử / tổng số điều kiện
- B. Số cột khả thi đã thực thi / tổng số cột khả thi ✅ *(Chính xác. Độ bao phủ bảng quyết định đo theo các quy tắc (cột) khả thi đã được kiểm thử.)*
- C. Số hành động đã xảy ra / tổng số hành động
- D. Số ca Pass / tổng số ca

> Chính xác!
>
> Độ bao phủ bảng quyết định = số quy tắc (cột) khả thi đã được thực thi / tổng số quy tắc khả thi. Các cột không khả thi (tổ hợp không thể xảy ra) bị loại khỏi mẫu số.
>
> The correct answer is: B. Số cột khả thi đã thực thi / tổng số cột khả thi

---

## Câu 4 (slide 1/2)

Khi lập bảng đầy đủ, một cột không được đặc tả quy định hành động. Tester nên:

- A. Chọn hành động hợp lý nhất theo kinh nghiệm
- B. Bỏ cột đó
- C. Ghi nhận và gửi câu hỏi làm rõ cho người phụ trách yêu cầu ✅ *(Chính xác. Đặc tả thiếu hành động là khiếm khuyết của yêu cầu — tester ghi nhận và làm rõ với BA/PO, không tự suy đoán hành động.)*
- D. Báo lỗi ngay cho lập trình viên

> Chính xác!
>
> Đây là phát hiện của kiểm thử tĩnh trên yêu cầu: đặc tả chưa đầy đủ. Tester không tự suy đoán hành động đúng (phương án A), cũng không báo cho dev ngay (phương án D) vì đó chưa phải lỗi code — việc đúng là ghi nhận và hỏi làm rõ với người phụ trách yêu cầu.
>
> The correct answer is: C. Ghi nhận và gửi câu hỏi làm rõ cho người phụ trách yêu cầu

---

## Câu 5 (slide 2/2)

Hệ thống có 5 trạng thái, 4 sự kiện và 7 chuyển hợp lệ (mỗi cặp trạng thái–sự kiện có tối đa một chuyển). Bảng trạng thái có bao nhiêu ô chuyển không hợp lệ?

- A. 7  B. 13 ✅ *(Chính xác. Tổng số ô = 5 trạng thái × 4 sự kiện = 20; chuyển hợp lệ 7 → ô không hợp lệ = 20 − 7 = 13.)*  C. 20  D. 27

> Chính xác!
>
> Bảng trạng thái có 5 hàng (trạng thái) × 4 cột (sự kiện) = 20 ô. Đã biết 7 ô là chuyển hợp lệ → 20 − 7 = 13 ô chuyển không hợp lệ.
>
> The correct answer is: B. 13

---

## Câu 6 (slide 2/2)

Bao phủ 0-switch nghĩa là:

- A. Mọi trạng thái được đi qua ít nhất một lần
- B. Mọi chuyển hợp lệ đơn lẻ được thực thi ít nhất một lần ✅ *(Chính xác. 0-switch = bao phủ mọi chuyển đơn lẻ, tương đương all-transitions.)*
- C. Mọi cặp chuyển liên tiếp được thực thi
- D. Không có chuyển nào được thực thi hai lần

> Chính xác!
>
> Bao phủ 0-switch (hay all-transitions): mỗi chuyển hợp lệ đơn lẻ được thực thi ít nhất một lần. Mở rộng: 1-switch bao phủ mọi cặp chuyển liên tiếp (câu C).
>
> The correct answer is: B. Mọi chuyển hợp lệ đơn lẻ được thực thi ít nhất một lần

---

## Câu 7 (slide 2/2)

"Tài khoản bị khóa sau 3 lần nhập sai mật khẩu liên tiếp và tự mở sau 30 phút". Kỹ thuật phù hợp nhất là:

- A. Phân vùng tương đương
- B. Chuyển đổi trạng thái ✅ *(Chính xác. Có trạng thái (đang chờ, bị khóa), sự kiện (sai/đúng mật khẩu) và yếu tố thời gian (30 phút) → mô hình trạng thái là kỹ thuật phù hợp nhất.)*
- C. Kiểm thử cặp đôi
- D. Bao phủ lệnh

> Chính xác!
>
> Yêu cầu mô tả các trạng thái (chờ nhập, bị khóa) và các sự kiện làm chuyển trạng thái (nhập sai 3 lần liên tiếp, hết 30 phút) — đặc trưng của kỹ thuật chuyển đổi trạng thái (State Transition Testing).
>
> The correct answer is: B. Chuyển đổi trạng thái

---

## Câu 8 (slide 2/2)

Kết quả mong đợi khi thử một chuyển không hợp lệ thường là:

- A. Hệ thống chuyển về trạng thái ban đầu
- B. Hệ thống từ chối sự kiện và trạng thái giữ nguyên ✅ *(Chính xác. Chuyển không hợp lệ thường được kỳ vọng bị hệ thống từ chối, giữ nguyên trạng thái hiện tại.)*
- C. Hệ thống chuyển sang trạng thái lỗi
- D. Không cần kết quả mong đợi vì chuyển này không tồn tại

> Chính xác!
>
> Mục đích của việc thử chuyển không hợp lệ (negative testing trên bảng trạng thái) là xác minh hệ thống xử lý đúng sự kiện bất ngờ: từ chối sự kiện và không làm thay đổi trạng thái hiện tại.
>
> The correct answer is: B. Hệ thống từ chối sự kiện và trạng thái giữ nguyên

---

# Trắc nghiệm cuối buổi 3

## Câu 1 (slide 1/2)

Đoạn mã `if (x > 0) { y = 1; } return y;` chạy với x = 5. Độ bao phủ nhánh là:

- A. 0%  B. 50% ✅ *(Chính xác. Với x = 5 chỉ đi nhánh True (y = 1), bỏ sót nhánh False → 1/2 = 50%.)*  C. 75%  D. 100%

> Chính xác!
>
> Quyết định `x > 0` có 2 kết quả (True/False). Với x = 5 chỉ kết quả True được thực thi, nhánh False chưa bao giờ đi qua → bao phủ nhánh = 1/2 = 50%.
>
> The correct answer is: B. 50%

---

## Câu 2 (slide 1/2)

Phát biểu nào **đúng**?

- A. 100% bao phủ lệnh đảm bảo 100% bao phủ nhánh
- B. 100% bao phủ nhánh đảm bảo 100% bao phủ lệnh ✅ *(Chính xác. Quy tắc vàng: 100% Decision/Branch Coverage ⇒ 100% Statement Coverage, chiều ngược lại không đúng.)*
- C. Hai loại bao phủ luôn bằng nhau
- D. Bao phủ nhánh không áp dụng được cho vòng lặp

> Chính xác!
>
> Quy tắc vàng của kiểm thử hộp trắng: đạt 100% bao phủ nhánh thì chắc chắn đạt 100% bao phủ lệnh, nhưng đạt 100% bao phủ lệnh không đảm bảo 100% bao phủ nhánh.
>
> The correct answer is: B. 100% bao phủ nhánh đảm bảo 100% bao phủ lệnh

---

## Câu 3 (slide 1/2)

Một hàm có 3 câu `if` nối tiếp, độc lập, không lồng nhau, không có `else`. Số ca tối thiểu để đạt 100% bao phủ **nhánh**:

- A. 1  B. 2 ✅ *(Chính xác. 3 câu if nối tiếp độc lập: ca 1 cho cả 3 if = True (bao phủ 3 nhánh True), ca 2 cho cả 3 if = False (bao phủ 3 nhánh False).)*  C. 3  D. 8

> Chính xác!
>
> Vì 3 câu if nối tiếp và độc lập, một ca kiểm thử có thể đi qua cả 3 nhánh True cùng lúc (ca 1) và một ca khác đi qua cả 3 nhánh False (ca 2) → chỉ cần 2 ca để bao phủ cả 6 nhánh.
>
> The correct answer is: B. 2

---

## Câu 4 (slide 1/2)

Với hàm ở câu 3, số ca tối thiểu để đạt 100% bao phủ **lệnh**:

- A. 1 ✅ *(Chính xác. Một ca với cả 3 if = True sẽ thực thi mọi lệnh trong hàm → 100% Statement Coverage chỉ cần 1 ca.)*  B. 2  C. 3  D. 6

> Chính xác!
>
> Bao phủ lệnh chỉ yêu cầu mỗi dòng code được chạy qua ít nhất một lần. Một ca duy nhất với cả 3 điều kiện = True sẽ chạy qua mọi lệnh trong hàm.
>
> The correct answer is: A. 1

---

## Câu 5 (slide 2/2)

Ở mức bao phủ nhánh, câu `if (a > 0 && b > 0)` được tính là:

- A. 1 quyết định, 2 kết quả ✅ *(Chính xác. Ở mức bao phủ nhánh, toàn bộ biểu thức điều kiện được tính là 1 quyết định với 2 kết quả True/False, không tách các điều kiện atomic.)*  B. 2 quyết định, 4 kết quả
- C. 1 quyết định, 4 kết quả  D. 2 quyết định, 2 kết quả

> Chính xác!
>
> Bao phủ nhánh (branch/decision coverage) đo theo quyết định (decision), không theo từng điều kiện nguyên tử (atomic condition). Toàn bộ `if (a > 0 && b > 0)` là 1 quyết định với 2 kết quả True/False.
>
> The correct answer is: A. 1 quyết định, 2 kết quả

---

## Câu 6 (slide 2/2)

Để một ca kiểm thử bao phủ cả hai kết quả của vòng lặp `while (i < n)` (với i bắt đầu từ 0), cần:

- A. n = 0  B. n ≥ 1 ✅ *(Chính xác. Với n = 0 vòng lặp không bao giờ được vào (chỉ 1 kết quả); với n ≥ 1 vòng lặp vào ít nhất 1 lần rồi thoát → bao phủ cả hai kết quả của điều kiện.)*  C. n < 0  D. Không thể trong một ca

> Chính xác!
>
> Điều kiện `i < n` có 2 kết quả. Với n = 0: điều kiện luôn False ngay từ đầu, vòng lặp không vào (chỉ 1 kết quả). Với n ≥ 1: điều kiện True ít nhất một lần rồi False để thoát → cả hai kết quả đều được thực thi trong một ca.
>
> The correct answer is: B. n ≥ 1

---

## Câu 7 (slide 2/2)

Bộ ca kiểm thử thực thi 8 trong 10 kết quả quyết định. Độ bao phủ nhánh là:

- A. 8%  B. 20%  C. 80% ✅ *(Chính xác. 8/10 = 80%.)*  D. 100%

> Chính xác!
>
> Độ bao phủ nhánh = số kết quả quyết định đã thực thi / tổng số kết quả quyết định = 8 / 10 = 80%.
>
> The correct answer is: C. 80%

---

## Câu 8 (slide 2/2)

Hạn chế lớn nhất của độ bao phủ hộp trắng là:

- A. Không đo được bằng công cụ
- B. Không phát hiện được yêu cầu chưa được cài đặt ✅ *(Chính xác. Hộp trắng chỉ đo code đã được viết — nó không thể phát hiện chức năng còn thiếu so với yêu cầu.)*
- C. Chỉ áp dụng cho JavaScript
- D. Luôn cần nhiều ca hơn kỹ thuật hộp đen

> Chính xác!
>
> Độ bao phủ hộp trắng chỉ đo mức độ code đã viết được thực thi — nó không thể phát hiện các yêu cầu bị bỏ sót chưa được cài đặt (missing functionality), cũng như các lỗi logic đúng về mặt cú pháp nhưng sai về yêu cầu nghiệp vụ.
>
> The correct answer is: B. Không phát hiện được yêu cầu chưa được cài đặt

---

