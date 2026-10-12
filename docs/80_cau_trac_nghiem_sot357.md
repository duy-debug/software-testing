# Bài quiz — Kiểm thử phần mềm (SOT357): 80 câu, 2 đề

## Phần 1: Đề thi (chưa có đáp án & lời giải)

### Đề 1 — Tổng quan, SDLC & Kiểm thử tĩnh (40 câu)

#### Question 1

Trong buổi họp dự án, một thành viên mới phát biểu: *"Kiểm thử phần mềm là chạy ứng dụng lên để xem nó có chạy được hay không."* Theo định nghĩa tổng quát trong slide (Chương 1), cách hiểu nào sau đây là **đúng nhất**?

**Select one:**

- a. Kiểm thử là chạy ứng dụng để xác nhận nó chạy được như mong đợi của developer
- b. Kiểm thử là quá trình kiểm tra xem phần mềm có đúng 100% yêu cầu của khách hàng hay không
- c. Kiểm thử chỉ nhằm ngăn ngừa lỗi ngay từ giai đoạn phân tích yêu cầu
- d. Kiểm thử là tiến trình thực thi một chương trình với mục đích tìm lỗi và đánh giá các đặc tính của sản phẩm


---

#### Question 2

Ứng dụng đặt vé xe khách chạy đúng mọi đặc tả kỹ thuật: tính đúng giá vé, lưu đúng dữ liệu, không crash. Tuy nhiên người dùng lớn tuổi phàn nàn không tìm được nút "Đặt vé" vì giao diện quá rối và thiếu bước xác nhận qua điện thoại mà họ cần. Xét theo tư duy V&V, vấn đề này thuộc về:

**Select one:**

- a. Verification – vì phần mềm đã xây dựng đúng thiết kế nên không có vấn đề gì
- b. Validation – vì phần mềm chưa đáp ứng đúng nhu cầu thực tế của người dùng
- c. Cả Verification và Validation đều đã thất bại như nhau
- d. Không thuộc V&V vì đây là vấn đề thiết kế giao diện, không phải kiểm thử


---

#### Question 3

Xét đoạn test tự động (Cypress) trong slide Chương 1: developer **hiểu sai yêu cầu**, đổi ID nút "Áp dụng" nhưng **quên cập nhật code** → nút trên giao diện bị sai ID → test case bị **timeout** vì không tìm thấy nút. Theo chuỗi Error → Defect → Failure, "việc developer hiểu sai yêu cầu" được gọi là gì?

**Select one:**

- a. Failure, vì nó là sự kiện test case bị timeout có thể quan sát được
- b. Defect, vì nó nằm trong mã nguồn của test
- c. Error, vì đây là hành động sai của con người và là nguyên nhân gốc gây ra Defect
- d. Không thuộc chuỗi nào vì đây là lỗi của test script, không phải của sản phẩm


---

#### Question 4

Developer viết hàm tính học bổng và **gõ nhầm** toán tử `>` thay vì `>=`, khiến sinh viên đúng 8.0 điểm bị loại khỏi danh sách. Đoạn code sai nằm trong chương trình này được gọi là gì theo thuật ngữ ISTQB?

**Select one:**

- a. Error, vì developer đã gõ nhầm toán tử
- b. Defect, vì đây là khiếm khuyết tồn tại trong mã nguồn do Error gây ra
- c. Failure, vì sinh viên bị loại khỏi danh sách học bổng
- d. Mistake, vì đây chỉ là lỗi đánh máy nhỏ không đáng kể


---

#### Question 5

Sau một đợt kiểm thử, toàn bộ 500 test case đều **Pass**. Trưởng dự án tuyên bố: *"Phần mềm đã sạch lỗi, có thể release mà không cần lo lắng."* Theo **Nguyên lý 1** (Testing shows the presence of defects), đánh giá nào sau đây là đúng?

**Select one:**

- a. Tuyên bố đúng, vì 500 test case pass chứng minh không còn lỗi
- b. Tuyên bố đúng nếu 500 test case đã bao phủ 100% yêu cầu
- c. Tuyên bố sai, vì cần chạy thêm test case nữa thì mới kết luận được
- d. Tuyên bố sai, vì kiểm thử chỉ chứng minh sự hiện diện của lỗi chứ không thể chứng minh phần mềm không còn lỗi


---

#### Question 6

Một form đăng ký có 10 trường, mỗi trường có khoảng 20 giá trị biên cần xét. Tester đề xuất "test hết mọi tổ hợp để chắc chắn không sót lỗi". Theo **Nguyên lý 2** (Exhaustive testing is impossible), hướng xử lý đúng là gì?

**Select one:**

- a. Đồng ý, vì chỉ có kiểm thử cạn kiệt mới đảm bảo chất lượng tuyệt đối
- b. Không thể test hết mọi tổ hợp đầu vào, nên dùng phân tích rủi ro (Risk) để ưu tiên những vùng quan trọng nhất
- c. Giảm số trường của form xuống để có thể test hết
- d. Chỉ test các trường hợp đúng (happy path) để tiết kiệm thời gian


---

#### Question 7

Trong buổi review tài liệu yêu cầu của hệ thống tính học phí, tester phát hiện hai yêu cầu mâu thuẫn nhau: một chỗ ghi "làm tròn xuống", chỗ khác ghi "làm tròn lên". Lỗi được sửa ngay trên tài liệu trước khi viết một dòng code nào. Đây là minh họa trực tiếp cho nguyên lý nào và lợi ích gì?

**Select one:**

- a. Nguyên lý 4 (quy tắc 80/20) – tập trung vào module tính học phí vì đây là module cốt lõi
- b. Nguyên lý 6 (phụ thuộc ngữ cảnh) – cách test hệ thống học phí khác với hệ thống khác
- c. Nguyên lý 3 – Kiểm thử sớm (Shift-left): bắt đầu test ngay từ khâu phân tích yêu cầu để tiết kiệm chi phí
- d. Nguyên lý 5 (nghịch lý thuốc trừ sâu) – cần cập nhật lại tài liệu yêu cầu thường xuyên


---

#### Question 8

Thống kê sau 3 tháng của dự án: trong 120 bug được tìm thấy, có tới 96 bug tập trung ở 2 module "Thanh toán" và "Đăng nhập" trên tổng số 10 module. Là test lead với thời gian có hạn, bạn nên quyết định thế nào theo **Nguyên lý 4**?

**Select one:**

- a. Dồn nỗ lực kiểm thử vào 2 module có mật độ lỗi cao, vì 80% bug thường nằm trong 20% module cốt lõi
- b. Chia đều thời gian cho cả 10 module để đảm bảo công bằng
- c. Bỏ qua 2 module nhiều lỗi vì chúng đã được test kỹ rồi
- d. Chỉ test 2 module đó và bỏ hẳn 8 module còn lại


---

#### Question 9

Chọn **HAI** phát biểu **đúng** về **Nguyên lý 5 – Nghịch lý thuốc trừ sâu** (Pesticide paradox).

**Select one or more:**

- a. Nếu cứ lặp đi lặp lại một tập Test Case cũ, nó sẽ dần không tìm ra bug mới
- b. Cần liên tục review và cập nhật, bổ sung Test Case mới để bắt được bug mới
- c. Nên xóa bỏ toàn bộ Test Case cũ sau mỗi lần release để tránh nghịch lý
- d. Chỉ cần chạy tự động hóa là đủ, không cần viết thêm Test Case mới


---

#### Question 10

Team A kiểm thử ứng dụng ngân hàng số: tập trung vào bảo mật, tính đúng đắn của giao dịch, khả năng chịu tải giờ cao điểm. Team B kiểm thử game mobile: tập trung vào trải nghiệm mượt mà, đồ họa, thời lượng pin. Sự khác biệt này minh họa cho nguyên lý nào?

**Select one:**

- a. Nguyên lý 1 – kiểm thử cho thấy sự hiện diện của lỗi
- b. Nguyên lý 5 – nghịch lý thuốc trừ sâu
- c. Nguyên lý 6 – kiểm thử phụ thuộc vào ngữ cảnh
- d. Nguyên lý 7 – sự sai lầm về việc không có lỗi


---

#### Question 11

Ứng dụng quản lý chi tiêu chạy ổn định suốt 6 tháng, không phát hiện bug nào qua nhiều đợt kiểm thử. Tuy nhiên người dùng vẫn bỏ app hàng loạt vì thiếu tính năng "quét hóa đơn tự động" mà đối thủ đã có từ lâu. Theo **Nguyên lý 7**, kết luận nào sau đây là đúng?

**Select one:**

- a. Đây là thành công vì phần mềm không có lỗi
- b. Đây vẫn là thất bại, vì phần mềm không có bug nhưng không đáp ứng đúng nhu cầu người dùng thì vẫn là phần mềm thất bại
- c. Đây là lỗi của team kiểm thử vì đã không tìm ra bug
- d. Nguyên lý 7 không áp dụng vì app không hề có lỗi kỹ thuật


---

#### Question 12

Bạn An là developer vừa viết xong module tính lương. An tự kiểm thử module của mình và kết luận "không có lỗi". Theo phần **Tâm lý học trong kiểm thử** (Chương 1), rủi ro lớn nhất ở đây là gì?

**Select one:**

- a. Developer không đủ kỹ năng để kiểm thử vì chỉ tester mới biết test
- b. Không có rủi ro, vì developer là người hiểu code rõ nhất nên tự test là tốt nhất
- c. Tester sẽ cảm thấy bị xúc phạm vì công việc của mình bị lấn át
- d. An dễ mắc thiên kiến xác nhận (confirmation bias) vì tâm lý "xây dựng" muốn chứng minh code chạy đúng, khác với tâm lý "phá vỡ" của tester


---

#### Question 13

Dự án phần mềm quản lý thư viện được phát triển theo mô hình mà mỗi giai đoạn phát triển (yêu cầu, thiết kế, lập trình) đều có một cấp độ kiểm thử tương ứng để xác nhận và phê chuẩn, và kế hoạch kiểm thử được lập từ rất sớm. Đây là đặc trưng của mô hình nào?

**Select one:**

- a. Mô hình thác nước (Waterfall) thuần túy, vì kiểm thử nằm sau lập trình
- b. Mô hình V-Model – sự mở rộng của Waterfall, mỗi giai đoạn phát triển có cấp độ kiểm thử tương ứng, kiểm thử được lên kế hoạch từ sớm (Shift-left)
- c. Mô hình Agile/Scrum, vì có sự tương ứng giữa các giai đoạn
- d. Mô hình Big Bang, vì tất cả các giai đoạn được thực hiện đồng thời


---

#### Question 14

Dự án áp dụng V-Model. Theo tinh thần Shift-left của mô hình này, **kế hoạch và test case cho kiểm thử chấp nhận (Acceptance Testing)** nên được chuẩn bị vào thời điểm nào?

**Select one:**

- a. Sau khi lập trình xong toàn bộ hệ thống
- b. Song song với giai đoạn kiểm thử hệ thống
- c. Ngay từ giai đoạn phân tích yêu cầu, vì mỗi giai đoạn phát triển có cấp độ kiểm thử tương ứng được lên kế hoạch sớm
- d. Chỉ khi khách hàng yêu cầu nghiệm thu


---

#### Question 15

Một công ty làm phần mềm theo mô hình tuần tự. Giữa chừng, khách hàng liên tục thay đổi yêu cầu về cách tính chiết khấu, khiến team phải quay lại sửa thiết kế và code nhiều lần, tiến độ trễ nghiêm trọng. Theo slide Chương 2, đây là nhược điểm của mô hình nào và bài học rút ra là gì?

**Select one:**

- a. Nhược điểm của Agile, vì Agile không có tài liệu yêu cầu
- b. Nhược điểm của V-Model – mở rộng của Waterfall: thiếu linh hoạt, khó phản ứng với sự thay đổi yêu cầu giữa chừng
- c. Nhược điểm của kiểm thử hộp đen, vì không nhìn thấy code
- d. Không phải nhược điểm mô hình mà do tester làm việc kém


---

#### Question 16

Trong team Scrum phát triển app giao đồ ăn (sprint 2 tuần), tester Bình có thói quen đợi developer code xong hết tính năng rồi mới bắt đầu viết test case và kiểm thử. Theo slide về **vai trò của Tester trong Agile**, thói quen này có vấn đề gì?

**Select one:**

- a. Không có vấn đề, vì kiểm thử theo định nghĩa là giai đoạn sau lập trình
- b. Sai, vì tester Agile không được đợi code xong mới test mà phải làm việc cùng Product Owner và Developer hàng ngày
- c. Sai, vì trong Agile không cần tester, developer tự test là đủ
- d. Đúng, vì sprint chỉ kéo dài 2 tuần nên phải test dồn vào cuối


---

#### Question 17

Chọn **HAI** phát biểu **đúng** về thách thức và "giải pháp sinh tồn" của kiểm thử trong Agile/Scrum theo slide Chương 2.

**Select one or more:**

- a. Tài liệu yêu cầu (Requirement) thường không đầy đủ và thay đổi liên tục
- b. Bắt buộc phải áp dụng kiểm thử tự động (Automation Testing) để theo kịp tốc độ kiểm thử hồi quy của CI/CD Pipelines
- c. Tester nên đợi đến cuối sprint mới kiểm thử một lần cho hiệu quả
- d. Trong Agile không cần kiểm thử hồi quy vì mỗi sprint đều là tính năng mới


---

#### Question 18

Chọn **HAI** phát biểu **đúng** về Stub và Mock khi kiểm thử đơn vị (theo slide Chương 2).

**Select one or more:**

- a. Stub trả về dữ liệu cứng (hardcode) để thay thế thành phần phụ thuộc chưa hoàn thiện
- b. Mock kiểm tra hành vi, ví dụ hàm có được gọi đúng tham số không
- c. Stub dùng để kiểm tra xem hàm có được gọi đúng số lần không
- d. Mock và Stub là một, không có sự khác biệt nào


---

#### Question 19

Hàm `tinhHocPhi(tinChi, donGia)` là một hàm độc lập trong module tài chính. Để kiểm thử đơn vị (Unit Testing) cho hàm này theo đúng slide Chương 2, ai là người phù hợp nhất để thực hiện và với cách tiếp cận nào?

**Select one:**

- a. Tester thực hiện kiểm thử hộp đen dựa trên tài liệu yêu cầu
- b. Khách hàng thực hiện kiểm thử chấp nhận trên môi trường thật
- c. Developer thực hiện, có thể áp dụng TDD (Test Driven Development), cô lập hàm để kiểm tra riêng
- d. Tester thực hiện kiểm thử hệ thống trên môi trường staging


---

#### Question 20

Ứng dụng bán hàng của công ty gọi sang **API thanh toán của MoMo** để xử lý giao dịch. Team kiểm thử muốn kiểm tra luồng dữ liệu và sự giao tiếp giữa app và cổng thanh toán này. Theo slide Chương 2, đây thuộc mức độ tích hợp nào?

**Select one:**

- a. Kiểm thử đơn vị, vì chỉ kiểm tra một API
- b. Component Integration, vì MoMo là một component của hệ thống
- c. Kiểm thử hệ thống, vì đã có sự tham gia của người dùng cuối
- d. System Integration – tích hợp giữa các hệ thống khác nhau (app mua hàng gọi sang API thanh toán của MoMo/VNPAY)


---

#### Question 21

Team có 5 module đã code xong. Test lead quyết định **gộp tất cả 5 module lại một lần rồi mới kiểm thử** sự giao tiếp giữa chúng. Đây là chiến lược tích hợp nào trong các chiến lược được liệt kê ở slide Chương 2?

**Select one:**

- a. Top-down, vì tích hợp từ module trên cùng xuống
- b. Bottom-up, vì tích hợp từ module dưới cùng lên
- c. Big Bang – tích hợp toàn bộ các module cùng một lúc rồi kiểm thử
- d. V-Model, vì đây là mô hình phát triển tương ứng


---

#### Question 22

Sau khi tất cả module đã được tích hợp, team triển khai toàn bộ hệ thống thương mại điện tử lên **môi trường Staging được cấu hình giống hệt Production**, rồi cho tester đi trọn luồng end-to-end: đăng ký → tìm hàng → đặt hàng → thanh toán, dưới góc nhìn của người mua hàng thực tế. Đây là cấp độ kiểm thử nào?

**Select one:**

- a. Kiểm thử tích hợp, vì các module đã được gộp lại
- b. Kiểm thử hệ thống (System Testing) – kiểm tra toàn bộ hệ thống đã lắp ráp hoàn chỉnh, dưới góc nhìn end-user, trên môi trường giống Production nhất có thể
- c. Kiểm thử đơn vị, vì mỗi bước trong luồng được test riêng
- d. Kiểm thử chấp nhận, vì đã có góc nhìn của người dùng cuối


---

#### Question 23

Công ty phát hành bản beta của app học tiếng Anh cho **200 người dùng thực tế bên ngoài** đăng ký dùng thử trước, để thu thập phản hồi trước khi phát hành chính thức. Theo phân loại Acceptance Testing trong slide, đây là loại kiểm thử nào?

**Select one:**

- a. UAT (User Acceptance Testing), vì có người dùng tham gia
- b. Alpha Testing, vì đây là vòng kiểm thử trước khi release
- c. Kiểm thử hệ thống, vì test toàn bộ hệ thống
- d. Beta Testing – mở cho một nhóm nhỏ người dùng thực tế bên ngoài sử dụng trước để thu thập phản hồi (Early access)


---

#### Question 24

Chọn **các** loại kiểm thử thuộc nhóm **Non-functional** (phi chức năng) theo phân loại Test Types trong slide Chương 2. Biết rằng Functional trả lời "hệ thống **làm cái gì**", còn Non-functional trả lời "hệ thống **làm tốt thế nào**".

**Select one or more:**

- a. Kiểm thử chịu tải với 10.000 người dùng truy cập đồng thời
- b. Kiểm thử bảo mật: ngăn chặn tấn công SQL Injection vào form đăng nhập
- c. Kiểm thử tính đúng đắn của công thức tính tiền học phí
- d. Đánh giá mức độ dễ sử dụng (Usability) của giao diện đăng ký


---

#### Question 25

Tester đọc mã nguồn của hàm `xepLoai(diem)`, vẽ sơ đồ các nhánh `if-else` rồi thiết kế test case sao cho mọi dòng lệnh trong hàm đều được thực thi ít nhất một lần (Statement coverage). Đây là loại kiểm thử nào?

**Select one:**

- a. Kiểm thử hộp đen, vì dựa trên yêu cầu xếp loại
- b. Kiểm thử tĩnh, vì có đọc mã nguồn mà không chạy
- c. White-box (hộp trắng) – test dựa trên cấu trúc code bên trong, ví dụ phủ lệnh (Statement coverage)
- d. Kiểm thử chấp nhận, vì kiểm tra yêu cầu người dùng


---

#### Question 26

Tester nhận tài liệu đặc tả của chức năng "Quên mật khẩu" và thiết kế toàn bộ test case chỉ dựa trên đặc tả này, **không hề mở mã nguồn** để xem cài đặt bên trong. Cách tiếp cận này được gọi là gì và nó trả lời câu hỏi nào?

**Select one:**

- a. White-box – trả lời "hệ thống được xây dựng thế nào"
- b. Black-box (hộp đen) – dựa trên tài liệu yêu cầu, trả lời "hệ thống làm gì"
- c. Kiểm thử tĩnh – vì không thực thi mã nguồn
- d. Kiểm thử hồi quy – vì kiểm tra lại chức năng cũ


---

#### Question 27

Sau khi developer sửa lỗi "không đăng nhập được khi mật khẩu có ký tự đặc biệt", tester chạy lại **đúng test case đã phát hiện ra lỗi đó** để xác nhận lỗi đã được sửa, sau đó chạy tiếp bộ test case của toàn module "Tài khoản" để đảm bảo việc sửa lỗi không làm hỏng chức năng khác. Hai hoạt động này lần lượt là gì?

**Select one:**

- a. Cả hai đều là Regression Test
- b. Cả hai đều là Confirmation Test
- c. Lần 1 là Regression Test, lần 2 là Confirmation Test
- d. Lần 1 là Confirmation Test (Re-test) – kiểm tra lại lỗi đã sửa; lần 2 là Regression Test – đảm bảo thay đổi không phá vỡ chức năng cũ


---

#### Question 28

Hệ thống bán vé đã chạy ổn định trên Production được 1 năm. Nay công ty **nâng cấp server cơ sở dữ liệu** lên phiên bản mới (không thay đổi tính năng). Theo slide Chương 2, team kiểm thử cần làm gì?

**Select one:**

- a. Không cần kiểm thử vì không thay đổi tính năng nào
- b. Chỉ kiểm thử đơn vị cho các hàm truy vấn dữ liệu
- c. Thực hiện kiểm thử bảo trì (Maintenance Testing) – trường hợp thay đổi môi trường (Environmental), và bắt buộc phân tích tác động (Impact Analysis) để quyết định phạm vi kiểm thử hồi quy
- d. Thực hiện kiểm thử chấp nhận Alpha với nhân viên công ty


---

#### Question 29

Team tổ chức một buổi họp để **đọc và rà soát tài liệu đặc tả yêu cầu** của module đăng ký học phần, phát hiện 3 điểm mâu thuẫn trước khi developer viết code. Hoạt động này thuộc loại kiểm thử nào và đặc điểm của nó là gì?

**Select one:**

- a. Kiểm thử động, vì đã phát hiện ra lỗi trong tài liệu
- b. Kiểm thử tĩnh (Static Testing) – KHÔNG thực thi mã nguồn, áp dụng cho tài liệu yêu cầu, thiết kế và code review
- c. Kiểm thử hộp trắng, vì đã đọc kỹ tài liệu kỹ thuật
- d. Kiểm thử chấp nhận, vì rà soát yêu cầu của khách hàng


---

#### Question 30

Trong buổi review tài liệu thiết kế, reviewer phát hiện: màn hình "Thanh toán" yêu cầu nhập "Số thẻ 16 chữ số" nhưng tài liệu luồng nghiệp vụ lại ghi "hỗ trợ cả thẻ 15 chữ số". Theo bảng so sánh Static vs Dynamic trong slide, việc phát hiện này có ý nghĩa gì?

**Select one:**

- a. Đây là kiểm thử động vì đã tìm ra Failure của hệ thống thanh toán
- b. Đây là kiểm thử hiệu năng vì liên quan đến định dạng dữ liệu thẻ
- c. Đây là kiểm thử tĩnh, phát hiện trực tiếp Defect (nguyên nhân gốc rễ) thay vì đợi nó bộc lộ thành Failure khi chạy
- d. Phát hiện này không có giá trị vì tài liệu chưa phải là sản phẩm


---

#### Question 31

Hai cách phát hiện cùng một lỗi sai công thức tính điểm: **Cách A** – reviewer phát hiện khi đọc tài liệu thiết kế, sửa mất 5 phút; **Cách B** – phát hiện khi hệ thống đã release, phải sửa code, build lại, test lại và phát hành bản vá, tốn 3 ngày công. Ví dụ này minh họa giá trị nào của kiểm thử tĩnh?

**Select one:**

- a. Kiểm thử tĩnh giúp loại bỏ hoàn toàn nhu cầu kiểm thử động
- b. Kiểm thử tĩnh chỉ có giá trị với tài liệu, không áp dụng cho code
- c. Kiểm thử tĩnh giúp tự động hóa toàn bộ quy trình kiểm thử
- d. Giá trị Shift-Left: phát hiện lỗi cực sớm và tiết kiệm chi phí khổng lồ – sửa một dòng trong tài liệu rẻ hơn hàng trăm lần so với sửa code, build lại và test lại


---

#### Question 32

Đoạn code sau được đưa vào kiểm thử nhưng **chưa bao giờ được chạy**:

```javascript
function processData(userInput) {
  const apiKey = "12345-ABCDE";   // khóa API ghi cứng trong code
  let dataList = [];
  return userInput.toUpperCase();
  console.log("Done!");           // dòng này không bao giờ chạy tới
}
```

Theo slide Chương 3, đây là ví dụ cho nhóm lỗi mà **kiểm thử tĩnh tìm ra nhưng kiểm thử động khó thấy**. Các lỗi trong đoạn code gồm:

**Select one:**

- a. Chỉ có lỗi cú pháp, vì code chưa được biên dịch
- b. Biến `apiKey` ghi cứng gây rủi ro bảo mật, biến `dataList` không dùng đến (code rác), và dòng `console.log` sau `return` là unreachable code
- c. Lỗi logic tính toán sai kết quả của `toUpperCase`
- d. Không có lỗi nào vì code vẫn chạy đúng chức năng chính


---

#### Question 33

Chọn **HAI** phát biểu **đúng** về các vai trò trong một buổi Review chính thức theo slide Chương 3.

**Select one or more:**

- a. Scribe (Thư ký): ghi chép lại các lỗi được tìm thấy và các quyết định đưa ra
- b. Moderator/Facilitator (Người điều phối): dẫn dắt buổi review, đảm bảo đúng tiến độ và hiệu quả
- c. Author (Tác giả): là người quyết định việc thực hiện review và phân bổ thời gian
- d. Reviewer (Người đánh giá): là người viết ra tài liệu/code được review


---

#### Question 34

Developer Mai viết xong một hàm xử lý chuỗi, cô quay sang **nhờ đồng nghiệp ngồi cạnh xem hộ** đoạn code trong 10 phút để bắt lỗi sơ suất. Theo phân loại 4 loại hình Review trong slide, đây là loại nào?

**Select one:**

- a. Inspection, vì có người khác kiểm tra code
- b. Walkthrough, vì đồng nghiệp đi qua từng dòng code
- c. Informal Review – review không chính thức, ví dụ Pair programming / Buddy check
- d. Technical Review, vì đây là đánh giá kỹ thuật


---

#### Question 35

Trong buổi họp review bản thiết kế module "Điểm danh bằng QR", chính **tác giả của bản thiết kế** là người **dẫn dắt cả team đi qua từng phần** của tài liệu, vừa giải thích ý tưởng vừa thu thập ý kiến đóng góp. Đây là loại hình review nào?

**Select one:**

- a. Informal Review, vì không khí buổi họp khá thoải mái
- b. Walkthrough – tác giả dẫn dắt team đi qua từng phần của tài liệu/code để giải thích và thu thập ý kiến
- c. Inspection, vì có cả team tham gia
- d. Technical Review, vì tài liệu này mang tính kỹ thuật


---

#### Question 36

Trước khi triển khai kiến trúc microservices cho hệ thống ngân hàng, công ty mời một nhóm **chuyên gia kỹ thuật** độc lập đánh giá xem **giải pháp thiết kế có khả thi không**, có đáp ứng được yêu cầu về hiệu năng và bảo mật hay không. Đây là loại hình review nào?

**Select one:**

- a. Informal Review, vì chỉ là đánh giá sơ bộ
- b. Walkthrough, vì các chuyên gia đi qua từng phần thiết kế
- c. Kiểm thử đơn vị, vì đánh giá từng thành phần kiến trúc
- d. Technical Review – các chuyên gia kỹ thuật đánh giá xem giải pháp thiết kế có khả thi không


---

#### Question 37

Đối với module tính lãi suất tiền gửi – phần cốt lõi và rủi ro cao nhất của hệ thống ngân hàng – công ty tổ chức một buổi review **khắt khe nhất**: có **Moderator điều phối**, reviewer đọc trước tài liệu và rà soát theo **checklist tiêu chuẩn** từng mục. Đây là loại hình review nào?

**Select one:**

- a. Informal Review
- b. Walkthrough
- c. Inspection – quy trình khắt khe nhất, có Moderator điều phối, dựa trên các checklist tiêu chuẩn
- d. Technical Review


---

#### Question 38

Team cài đặt **SonarQube** vào pipeline để **tự động quét mã nguồn** mỗi khi developer push code, nhằm kiểm tra việc tuân thủ coding standards và phát hiện biến rác, rủi ro bảo mật – mà **không cần chạy chương trình**. Hoạt động này được gọi là gì?

**Select one:**

- a. Static Analysis – dùng phần mềm tự động quét (scan) mã nguồn mà không cần chạy nó
- b. Kiểm thử động, vì được chạy tự động trong pipeline
- c. Kiểm thử hộp đen, vì không quan tâm code bên trong
- d. Kiểm thử hồi quy, vì chạy lại sau mỗi lần push code


---

#### Question 39

Chọn **các** hoạt động thuộc về **kiểm thử tĩnh (Static Testing)**.

**Select one or more:**

- a. Tổ chức buổi review tài liệu yêu cầu để tìm điểm mâu thuẫn
- b. Chạy ESLint để quét mã nguồn tìm biến không dùng và unreachable code
- c. Chạy test case đăng nhập trên môi trường Staging để kiểm tra luồng end-to-end
- d. Thực hiện Inspection code theo checklist tiêu chuẩn với Moderator điều phối


---

#### Question 40

Sau khi áp dụng đầy đủ kiểm thử tĩnh (review tài liệu, inspection code, SonarQube quét sạch không còn cảnh báo), trưởng dự án đề xuất **bỏ hẳn kiểm thử động** để tiết kiệm thời gian vì "lỗi đã được tìm hết từ sớm". Đề xuất này có hợp lý không?

**Select one:**

- a. Hợp lý, vì kiểm thử tĩnh đã phát hiện trực tiếp mọi Defect là nguyên nhân gốc rễ
- b. Hợp lý, vì kiểm thử tĩnh rẻ hơn kiểm thử động hàng trăm lần
- c. Hợp lý với điều kiện SonarQube báo 100% sạch
- d. Không hợp lý – kiểm thử tĩnh và kiểm thử động bổ sung cho nhau: tĩnh tìm Defect trực tiếp (nguyên nhân gốc), động phát hiện Failure khi thực thi (hậu quả bộc lộ), và có những lỗi chỉ lộ ra khi chạy như race condition, lỗi tích hợp môi trường thật


---


---

### Đề 2 — Kỹ thuật thiết kế, Quản lý & Tự động hoá (40 câu)

#### Question 1

Trường "Số điện thoại" hợp lệ khi gồm đúng 10 chữ số và bắt đầu bằng 0. Tester viết ca kiểm thử: SĐT = "abc123" (không hợp lệ), Email = "khonghop lệ" (không hợp lệ). Hệ thống báo: "Email không hợp lệ". Kết luận đúng của tester là gì?

**Select one:**

- a. Chức năng kiểm tra SĐT hoạt động đúng vì hệ thống đã báo lỗi
- b. Nên gộp thêm trường Họ tên sai vào cùng ca để tiết kiệm số ca kiểm thử
- c. Không thể kết luận gì về việc kiểm tra SĐT vì lỗi email đã che mất lỗi SĐT (hiện tượng masking)
- d. SĐT "abc123" là hợp lệ vì có 6 ký tự


---

#### Question 2

Quy định: đơn hàng TRÊN 500.000đ được miễn phí vận chuyển (bước nhảy 1.000đ; riêng 500.000đ không được miễn). Áp dụng BVA 2 giá trị cho biên 500.000đ, cặp giá trị kiểm thử ĐÚNG là?

**Select one:**

- a. 499.000đ và 500.000đ
- b. 500.000đ và 501.000đ
- c. 499.000đ và 501.000đ
- d. 501.000đ và 502.000đ


---

#### Question 3

Với yêu cầu 18 ≤ Tuổi ≤ 60 (Tuổi là số nguyên), áp dụng BVA theo phương pháp **3 giá trị** (ISTQB), tập giá trị kiểm thử ĐÚNG là?

**Select one:**

- a. 17, 18, 60, 61
- b. 18, 19, 59, 60
- c. 17, 18, 19, 59, 60, 61
- d. 16, 17, 18, 60, 61, 62


---

#### Question 4

Đoạn code kiểm tra điều kiện cấp bằng lái (yêu cầu đúng: 18 ≤ Tuổi ≤ 60):

```
if (age > 18 && age <= 60) return "Allowed"; else return "Denied";
```

Tester A dùng EP với giá trị 30, tester B dùng BVA với giá trị 18. Phát biểu ĐÚNG là?

**Select one:**

- a. Cả hai đều phát hiện được bug
- b. Chỉ tester A phát hiện được bug vì 30 nằm giữa vùng hợp lệ
- c. Không ai phát hiện được vì code không có lỗi biên
- d. Chỉ tester B phát hiện được bug vì 18 bị từ chối sai, trong khi 30 vẫn cho kết quả đúng nên bug bị lọt


---

#### Question 5

Đặc tả rút tiền ví điện tử: số tiền rút mỗi lần là số nguyên, tối thiểu 50.000đ, tối đa 20.000.000đ và phải là bội số của 10.000đ. Muốn kiểm tra RIÊNG quy tắc "tối thiểu" (không vi phạm đồng thời quy tắc bội số), nên chọn giá trị nào?

**Select one:**

- a. 49.999đ
- b. 125.000đ
- c. 20.010.000đ
- d. 40.000đ


---

#### Question 6

Hệ thống xét học bổng theo ĐTB (thang 4, 2 chữ số thập phân): dưới 2.50 → Không đạt; từ 2.50 đến dưới 3.20 → Khá; từ 3.20 đến dưới 3.60 → Giỏi; từ 3.60 đến 4.00 → Xuất sắc; ngoài [0.00; 4.00] hoặc không phải số → Báo lỗi. Áp dụng EP cho đầu RA, cần tối thiểu bao nhiêu Test Case để bao phủ mọi phân vùng đầu ra?

**Select one:**

- a. 4
- b. 6
- c. 5
- d. 3


---

#### Question 7

Quy định chiết khấu: khách hàng được giảm 10% nếu thỏa các điều kiện: (C1) là thành viên Vàng, (C2) có mã giảm giá, (C3) đơn hàng trên 1.000.000đ. Bảng quyết định ĐẦY ĐỦ (chưa rút gọn) có bao nhiêu cột quy tắc?

**Select one:**

- a. 6
- b. 3
- c. 8
- d. 9


---

#### Question 8

Tính ưu đãi theo: C1 — Hạng thành viên: Thường / Bạc / Vàng (3 giá trị); C2 — Có nhập mã giảm giá: Có / Không (2 giá trị). Bảng quyết định đầy đủ có bao nhiêu cột quy tắc?

**Select one:**

- a. 5
- b. 6
- c. 8
- d. 9


---

#### Question 9

Bảng quyết định tính phí ship: C1: Khách hàng VIP? — C2: Đơn hàng > 500k? Quy tắc nghiệp vụ: hễ là VIP thì luôn được Free Ship bất kể giá trị đơn hàng. Khi rút gọn bảng bằng ký hiệu "–" (don't-care) ở ô C2 của quy tắc VIP, kết quả ĐÚNG là?

**Select one:**

- a. Số cột quy tắc tăng từ 4 lên 5
- b. Ký hiệu "–" nghĩa là điều kiện đó bị xóa khỏi đặc tả
- c. Không thể rút gọn vì sẽ làm mất một tổ hợp điều kiện
- d. Hai quy tắc (VIP + đơn > 500k) và (VIP + đơn ≤ 500k) gộp thành một, bảng còn 3 cột mà vẫn bao phủ đầy đủ logic


---

#### Question 10

Trang thanh toán có 3 tham số, mỗi tham số 3 lựa chọn (trình duyệt × hệ điều hành × phương thức thanh toán) → 27 tổ hợp đầy đủ. Team quyết định chỉ cần đảm bảo mọi CẶP giá trị (của 2 tham số bất kỳ) xuất hiện ít nhất một lần trong bộ test. Đây là kỹ thuật gì và vì sao hợp lý?

**Select one:**

- a. Phân vùng tương đương — vì mỗi tham số là một phân vùng
- b. Bảng quyết định — vì có nhiều điều kiện kết hợp
- c. Kiểm thử tổ hợp cặp đôi (Pairwise) — vì phần lớn lỗi phát sinh từ tương tác của chỉ hai tham số
- d. Đoán lỗi — vì dựa vào kinh nghiệm của tester


---

#### Question 11

Vòng đời đơn hàng: Nháp → (sự kiện Nộp) → Chờ duyệt → (sự kiện Duyệt) → Đã duyệt. Sự kiện "Duyệt" chỉ hợp lệ khi đơn đang ở trạng thái Chờ duyệt. Tester thử bấm "Duyệt" khi đơn còn ở trạng thái Nháp. Kết quả mong đợi ĐÚNG là?

**Select one:**

- a. Đơn chuyển sang Đã duyệt vì sự kiện sẽ hợp lệ ở bước sau
- b. Đơn tự động chuyển sang Chờ duyệt rồi Đã duyệt
- c. Hệ thống crash là chấp nhận được vì đây là ca bất thường
- d. Hệ thống từ chối sự kiện, trạng thái đơn giữ nguyên ở Nháp và hiển thị thông báo phù hợp


---

#### Question 12

Tài khoản bắt đầu ở S1 (Chờ nhập PIN). Quy tắc: nhập sai 3 lần thì chuyển sang S2 (Bị khóa); nhập đúng PIN khi ở S1 thì chuyển sang S3 (Đăng nhập thành công). Người dùng thực hiện chuỗi sự kiện: **Sai → Sai → Sai → Đúng**. Trạng thái cuối cùng mong đợi là?

**Select one:**

- a. S3: Đăng nhập thành công
- b. S1: Chờ nhập PIN
- c. S2: Bị khóa
- d. Trạng thái không xác định


---

#### Question 13

Ba mức bao phủ của kiểm thử chuyển trạng thái là: (1) mọi trạng thái được đi qua, (2) mọi chuyển đổi hợp lệ được thực thi, (3) mọi chuyển đổi kể cả không hợp lệ được thử. Mức (2) còn được gọi là gì?

**Select one:**

- a. Bao phủ mọi trạng thái
- b. Bao phủ mọi chuyển không hợp lệ
- c. Bao phủ 0-switch
- d. Bao phủ quyết định


---

#### Question 14

Cho hàm:

```
function calculateDiscount(amount) {
  let discount = 0;          // Lệnh 1
  if (amount > 1000) {       // Lệnh 2 (quyết định True/False)
    discount = 10;           // Lệnh 3
  }
  return discount;           // Lệnh 4
}
```

Chạy MỘT Test Case duy nhất với amount = 500. Độ bao phủ lệnh (Statement) và bao phủ quyết định (Decision) lần lượt là?

**Select one:**

- a. 100% và 100%
- b. 75% và 50%
- c. 75% và 100%
- d. 50% và 50%


---

#### Question 15

Phát biểu ĐÚNG về mối quan hệ giữa bao phủ quyết định (Decision/Branch Coverage) và bao phủ lệnh (Statement Coverage) là?

**Select one:**

- a. Đạt 100% Statement thì tự động đạt 100% Decision
- b. Hai độ đo này độc lập, không liên quan nhau
- c. Statement là tiêu chí mạnh hơn Decision
- d. Đạt 100% Decision thì tự động đảm bảo 100% Statement, nhưng ngược lại thì không


---

#### Question 16

Chọn **BA** ví dụ thuộc kỹ thuật Đoán lỗi (Error Guessing).

**Select one or more:**

- a. Nhập `<script>alert(1)</script>` vào ô tìm kiếm để kiểm tra XSS
- b. Thử chia hóa đơn cho số lượng bằng 0
- c. Bỏ trống trường bắt buộc rồi bấm Lưu
- d. Đo statement coverage của module bằng công cụ
- e. Vẽ bảng quyết định cho logic tính chiết khấu


---

#### Question 17

Bug: chữ "Khuyến mãi" trên banner trang chủ bị gõ sai thành "Khuyến mải". Lỗi không ảnh hưởng chức năng, nhưng đối tác lớn sẽ demo hệ thống cho khách hàng vào ngày mai. Phân loại ĐÚNG là?

**Select one:**

- a. Severity High, Priority High
- b. Severity High, Priority Low
- c. Severity Low, Priority High
- d. Severity Low, Priority Low


---

#### Question 18

Một bug đang ở trạng thái Fixed. Tester retest và thấy lỗi VẪN còn tồn tại. Theo vòng đời defect, tester sẽ chuyển bug sang trạng thái nào?

**Select one:**

- a. New
- b. Assigned
- c. Reopened
- d. Closed


---

#### Question 19

Chọn **HAI** điều kiện thuộc Tiêu chí BẮT ĐẦU kiểm thử (Entry Criteria).

**Select one or more:**

- a. Môi trường kiểm thử đã được setup xong
- b. Dev đã chạy xong Unit Test
- c. Đã thực thi 100% Test Case
- d. Số bug Critical chưa sửa bằng 0


---

#### Question 20

Điều nào sau đây là Tiêu chí KẾT THÚC kiểm thử (Exit Criteria) hợp lệ?

**Select one:**

- a. Dev vừa commit code mới lên nhánh test
- b. Số bug Critical/Blocker chưa sửa bằng 0 và đạt độ bao phủ yêu cầu
- c. Tester đã viết xong Test Plan
- d. Môi trường test vừa được setup xong


---

#### Question 21

Trong Test Plan, mục nào trả lời câu hỏi "tính năng nào sẽ KHÔNG được kiểm thử"?

**Select one:**

- a. Tiến độ (Schedule) — các mốc thời gian
- b. Nhân lực & Môi trường — số tester và cấu hình server
- c. Tiêu chí bắt đầu & kết thúc (Entry/Exit Criteria)
- d. Phạm vi (Scope)


---

#### Question 22

Test Lead muốn trả lời câu hỏi: "Mọi yêu cầu của khách hàng đã có ít nhất một Test Case kiểm tra chưa?" Công cụ phù hợp nhất là?

**Select one:**

- a. Bảng quyết định (Decision Table)
- b. Báo cáo defect hàng ngày
- c. Ma trận truy vết yêu cầu (RTM)
- d. Test Plan


---

#### Question 23

Hai rủi ro được đánh giá: R1 — xác suất xảy ra 0.9, mức độ ảnh hưởng 2/10; R2 — xác suất xảy ra 0.3, mức độ ảnh hưởng 8/10. Theo công thức Mức độ rủi ro = Xác suất × Mức độ ảnh hưởng, rủi ro nào cần ưu tiên kiểm thử trước?

**Select one:**

- a. R1 vì xác suất xảy ra cao hơn
- b. R2 vì 0.3 × 8 = 2.4 > 0.9 × 2 = 1.8
- c. Cả hai có mức độ rủi ro ngang nhau
- d. Không thể so sánh vì khác thang đo


---

#### Question 24

Nguồn lực kiểm thử có hạn, không thể test kỹ mọi tính năng. Theo Kiểm thử dựa trên rủi ro (Risk-Based Testing), tester nên làm gì?

**Select one:**

- a. Test các tính năng dễ nhất trước để nhanh đạt số lượng test case
- b. Chỉ test các tính năng mà dev tự tin nhất
- c. Ưu tiên test trước và test kỹ hơn các tính năng có mức độ rủi ro cao
- d. Chia đều thời gian cho mọi tính năng


---

#### Question 25

Team dùng Planning Poker: cả team úp thẻ bài theo dãy số Fibonacci để ẩn danh đánh giá độ khó của task kiểm thử. Đây là kỹ thuật ước lượng nào?

**Select one:**

- a. Dựa trên số liệu (Metrics-based)
- b. Dựa trên chuyên gia (Expert-based)
- c. Dựa trên rủi ro (Risk-based)
- d. Phân tích giá trị biên (BVA)


---

#### Question 26

Để tránh thiên vị xác nhận (confirmation bias) khi tìm lỗi, mức độ độc lập trong kiểm thử nào là KHÁCH QUAN NHẤT?

**Select one:**

- a. Dev tự test code của mình
- b. Dev test chéo cho nhau trong cùng một team
- c. Team test độc lập trong nội bộ công ty
- d. Tổ chức kiểm thử độc lập thuê từ bên ngoài


---

#### Question 27

Chọn **HAI** trường hợp NÊN tự động hóa kiểm thử.

**Select one or more:**

- a. Bộ Test Case hồi quy chạy lại sau mỗi lần commit
- b. Kiểm thử tải (Load test) với 5.000 người dùng ảo
- c. Test Case chỉ chạy đúng một lần
- d. Kiểm thử thăm dò (Exploratory) tính năng mới


---

#### Question 28

Theo Tháp kiểm thử tự động (Mike Cohn) với tỷ lệ Unit 70% – API/Service 20% – UI 10%, phát biểu ĐÚNG là?

**Select one:**

- a. Nên viết càng nhiều UI test càng tốt vì gần với người dùng nhất
- b. Unit test ở đáy tháp: viết càng nhiều càng tốt, chạy mất vài mili-giây, tìm lỗi ngay ở mức hàm/class; UI test ở đỉnh tháp: viết ít nhất, chỉ cho các luồng người dùng quan trọng nhất
- c. API test chậm và tốn công bảo trì nhất nên viết ít nhất
- d. Cả ba tầng nên viết số lượng bằng nhau


---

#### Question 29

Một Test Case automation lúc chạy Pass, lúc chạy Fail dù code và môi trường không đổi. Nguyên nhân CHÍNH thường gặp nhất là?

**Select one:**

- a. Tester viết sai expected result
- b. Server bị hacker tấn công
- c. Code automation chạy nhanh hơn tốc độ tải của trang web — đoạn code cố click vào một nút chưa kịp hiện ra trên màn hình
- d. Dùng trình duyệt phiên bản quá mới


---

#### Question 30

Vì sao "tuyệt đối không dùng hard sleep" như `await page.waitForTimeout(5000)` trong automation?

**Select one:**

- a. Vì lệnh này bị Playwright cấm hoàn toàn, code sẽ báo lỗi biên dịch
- b. Vì nó làm tăng flaky test
- c. Vì nó chỉ chạy được trên Chrome, không chạy được trên Firefox
- d. Vì nó bắt code dừng cứng 5 giây: nếu web tải xong trong 1 giây thì lãng phí 4 giây, khiến cả bộ test chậm chạp


---

#### Question 31

Team áp dụng Page Object Model (POM): file `LoginPage.js` chứa locators và các hàm thao tác, file `login.spec.js` chứa kịch bản kiểm thử. Khi dev đổi id của nút Đăng nhập, điều gì xảy ra?

**Select one:**

- a. Phải sửa lại toàn bộ các file test liên quan đến đăng nhập
- b. Phải viết lại toàn bộ framework automation
- c. Chỉ cần sửa một nơi duy nhất trong LoginPage.js (Page Class), hàng trăm file Test Case không bị ảnh hưởng
- d. Không cần sửa gì vì POM tự động cập nhật locator


---

#### Question 32

Giao diện web đã chặn không cho nhập số tiền âm, nhưng hacker gọi thẳng API với `amount = -1000000` và hệ thống chấp nhận, gây thất thoát tiền. Tình huống này chứng minh điều gì về API Testing?

**Select one:**

- a. UI testing là đủ, không cần API testing
- b. Nên tắt API đi để hacker không gọi được
- c. API testing bảo vệ lớp bảo mật cốt lõi: kiểm tra ở UI có thể bị bypass hoàn toàn nếu API không tự chặn
- d. Lỗi này thuộc về tester manual, không liên quan automation


---

#### Question 33

Chọn **TẤT CẢ** các cặp tình huống – mã trạng thái HTTP ĐÚNG trong kiểm thử API.

**Select one or more:**

- a. POST /users tạo tài khoản thành công → 201 Created
- b. GET /users/999 với id không tồn tại → 404 Not Found
- c. Gọi API không kèm token xác thực → 401 Unauthorized
- d. Gửi body JSON sai định dạng → 500 Internal Server Error


---

#### Question 34

Team có một script kiểm thử đăng nhập và muốn chạy nó với 200 bộ dữ liệu tài khoản khác nhau lưu trong file CSV, mà không phải copy-paste code 200 lần. Nên dùng loại framework automation nào?

**Select one:**

- a. Linear Scripting (Record & Playback)
- b. Keyword-Driven Framework
- c. Behavior-Driven Development (BDD) với Cucumber
- d. Data-Driven Framework


---

#### Question 35

Hoạt động nào sau đây thuộc tư duy Shift-Left?

**Select one:**

- a. A/B Testing trên production
- b. Review tài liệu yêu cầu, Unit Test, phân tích tĩnh (Static Analysis) ngay từ đầu dự án
- c. Theo dõi log lỗi của người dùng thực sau khi release
- d. Kiểm thử khả năng chịu tải khi hệ thống đã vận hành ổn định


---

#### Question 36

Pipeline CI/CD của team: Dev push code → server tự động build và chạy Unit/API Test; sau đó tự động đẩy sang môi trường Staging, chạy UI/E2E Test, nếu pass 100% thì đẩy lên Production. Phát biểu ĐÚNG là?

**Select one:**

- a. Giai đoạn push code → build → chạy Unit/API Test chính là CD
- b. Trong CI/CD không cần chạy test tự động, chỉ cần build
- c. UI/E2E Test nên chạy ở bước CI ngay sau khi push code
- d. CI giúp phát hiện code xung đột ngay lập tức; CD tự động triển khai qua Staging (chạy E2E) lên Production khi pass 100%


---

#### Question 37

Chọn **BA** ứng dụng của Generative AI (LLM) trong vòng đời kiểm thử.

**Select one or more:**

- a. Đưa tài liệu đặc tả vào LLM để trích xuất tự động danh sách Test Conditions
- b. Sinh hàng ngàn dòng dữ liệu kiểm thử giả (tên, email, số thẻ) bằng prompt thay vì gõ tay
- c. Chuyển Test Case viết bằng tiếng Anh thành mã Playwright/JS (Text-to-Code)
- d. Thay thế hoàn toàn tester, không cần kiểm tra lại kết quả của AI
- e. Tự động sửa mọi bug mà không cần developer


---

#### Question 38

Chọn **HAI** rủi ro khi sử dụng Gen-AI trong kiểm thử mà tester phải cảnh giác.

**Select one or more:**

- a. Ảo giác (Hallucination): AI bịa ra Test Case cho các tính năng hoàn toàn không tồn tại
- b. Rò rỉ dữ liệu (Data Privacy): đưa mã nguồn nội bộ hoặc dữ liệu thật của khách hàng lên nền tảng AI công cộng có thể vi phạm NDA
- c. AI chạy test nhanh hơn con người
- d. AI giúp viết báo cáo defect đẹp hơn


---

#### Question 39

Khi kiểm thử chatbot tuyển sinh dùng LLM, cùng một câu hỏi nhưng mỗi lần hỏi AI lại trả lời với văn phong khác nhau. Vì sao KHÔNG nên dùng assert so sánh chuỗi chính xác (exact match) trong trường hợp này?

**Select one:**

- a. Vì chatbot không phải là phần mềm nên không thể kiểm thử
- b. Vì hệ thống AI là phi tất định (non-deterministic) và tồn tại "bài toán Oracle" — khó xác định kết quả mong đợi tuyệt đối
- c. Vì assert chuỗi chính xác chạy quá chậm với LLM
- d. Vì LLM không trả về dữ liệu dạng văn bản


---

#### Question 40

So với Tháp kiểm thử truyền thống (ưu tiên Unit 70%), điểm khác biệt cốt lõi của mô hình Testing Trophy (Kent C. Dodds) là gì?

**Select one:**

- a. Bỏ hoàn toàn Unit Test và E2E Test
- b. Viết càng nhiều E2E test càng tốt vì gần người dùng nhất
- c. Ưu tiên đầu tư trọng tâm vào Integration Test (tầng lớn nhất) vì cho độ tin cậy cao với chi phí hợp lý; tầng Static (ESLint, TypeScript) bắt lỗi gần như miễn phí
- d. Chỉ kiểm thử bằng tay, không cần automation



---

## Phần 2: Đáp án & lời giải chi tiết

### Đáp án Đề 1

#### Question 1

Trong buổi họp dự án, một thành viên mới phát biểu: *"Kiểm thử phần mềm là chạy ứng dụng lên để xem nó có chạy được hay không."* Theo định nghĩa tổng quát trong slide (Chương 1), cách hiểu nào sau đây là **đúng nhất**?

**Select one:**

- a. Kiểm thử là chạy ứng dụng để xác nhận nó chạy được như mong đợi của developer
- b. Kiểm thử là quá trình kiểm tra xem phần mềm có đúng 100% yêu cầu của khách hàng hay không
- c. Kiểm thử chỉ nhằm ngăn ngừa lỗi ngay từ giai đoạn phân tích yêu cầu
- d. Kiểm thử là tiến trình thực thi một chương trình với mục đích tìm lỗi và đánh giá các đặc tính của sản phẩm ✅ *(Chính xác – đúng định nghĩa tổng quát: tìm lỗi + đánh giá đặc tính, không chỉ "xem có chạy được không".)*

> Chính xác!
>
> Định nghĩa tổng quát trong slide: kiểm thử phần mềm là tiến trình **thực thi** một chương trình với mục đích **tìm lỗi và đánh giá các đặc tính** của sản phẩm. Đáp án a quá hẹp (chỉ kiểm tra "chạy được"), đáp án b đòi hỏi sự hoàn hảo 100% là không thể, đáp án c chỉ nêu khía cạnh ngăn ngừa lỗi mà bỏ qua mục đích tìm lỗi.
>
> The correct answer is: Kiểm thử là tiến trình thực thi một chương trình với mục đích tìm lỗi và đánh giá các đặc tính của sản phẩm

---

#### Question 2

Ứng dụng đặt vé xe khách chạy đúng mọi đặc tả kỹ thuật: tính đúng giá vé, lưu đúng dữ liệu, không crash. Tuy nhiên người dùng lớn tuổi phàn nàn không tìm được nút "Đặt vé" vì giao diện quá rối và thiếu bước xác nhận qua điện thoại mà họ cần. Xét theo tư duy V&V, vấn đề này thuộc về:

**Select one:**

- a. Verification – vì phần mềm đã xây dựng đúng thiết kế nên không có vấn đề gì
- b. Validation – vì phần mềm chưa đáp ứng đúng nhu cầu thực tế của người dùng ✅ *(Chính xác. Verification = "Are we building the product right?" (đúng thiết kế); Validation = "Are we building the right product?" (đúng nhu cầu).)*
- c. Cả Verification và Validation đều đã thất bại như nhau
- d. Không thuộc V&V vì đây là vấn đề thiết kế giao diện, không phải kiểm thử

> Chính xác!
>
> Verification trả lời "chúng ta có đang xây dựng sản phẩm **đúng** không" (đúng thiết kế/đặc tả) – ở đây đã đạt. Validation trả lời "chúng ta có đang xây dựng **đúng sản phẩm** không" (đúng nhu cầu người dùng) – ở đây thất bại vì người dùng lớn tuổi không dùng được. Đáp án a sai vì đúng thiết kế chưa đủ; đáp án d sai vì tính dễ dùng và đáp ứng nhu cầu chính là đối tượng của Validation.
>
> The correct answer is: Validation – vì phần mềm chưa đáp ứng đúng nhu cầu thực tế của người dùng

---

#### Question 3

Xét đoạn test tự động (Cypress) trong slide Chương 1: developer **hiểu sai yêu cầu**, đổi ID nút "Áp dụng" nhưng **quên cập nhật code** → nút trên giao diện bị sai ID → test case bị **timeout** vì không tìm thấy nút. Theo chuỗi Error → Defect → Failure, "việc developer hiểu sai yêu cầu" được gọi là gì?

**Select one:**

- a. Failure, vì nó là sự kiện test case bị timeout có thể quan sát được
- b. Defect, vì nó nằm trong mã nguồn của test
- c. Error, vì đây là hành động sai của con người và là nguyên nhân gốc gây ra Defect ✅ *(Chính xác. Error (Human Action) → gây ra Defect (trong code/tài liệu) → khi thực thi gây ra Failure (sự kiện).)*
- d. Không thuộc chuỗi nào vì đây là lỗi của test script, không phải của sản phẩm

> Chính xác!
>
> Theo slide: **Error** là hành động sai của con người (hiểu sai yêu cầu, gõ nhầm); **Defect** là kết quả của Error tồn tại trong code/tài liệu (ở đây là ID nút bị sai trên giao diện); **Failure** là sự kiện khi Defect bộc lộ lúc thực thi (test case timeout). Việc "hiểu sai yêu cầu" là hành động của con người → Error.
>
> The correct answer is: Error, vì đây là hành động sai của con người và là nguyên nhân gốc gây ra Defect

---

#### Question 4

Developer viết hàm tính học bổng và **gõ nhầm** toán tử `>` thay vì `>=`, khiến sinh viên đúng 8.0 điểm bị loại khỏi danh sách. Đoạn code sai nằm trong chương trình này được gọi là gì theo thuật ngữ ISTQB?

**Select one:**

- a. Error, vì developer đã gõ nhầm toán tử
- b. Defect, vì đây là khiếm khuyết tồn tại trong mã nguồn do Error gây ra ✅ *(Chính xác. Hành động gõ nhầm của con người là Error; đoạn code sai tồn tại trong chương trình là Defect.)*
- c. Failure, vì sinh viên bị loại khỏi danh sách học bổng
- d. Mistake, vì đây chỉ là lỗi đánh máy nhỏ không đáng kể

> Chính xác!
>
> Cần phân biệt rõ: **Error** = hành động sai của con người (gõ nhầm `>`); **Defect** = khiếm khuyết tồn tại trong code/tài liệu do Error gây ra (điều kiện sai trong chương trình); **Failure** = sự kiện sai lệch quan sát được khi chạy (chỉ xảy ra khi có sinh viên đúng 8.0 điểm chạy qua nhánh này). Đáp án a nhầm lẫn giữa hành động và kết quả; đáp án d không phải thuật ngữ ISTQB trong chuỗi này.
>
> The correct answer is: Defect, vì đây là khiếm khuyết tồn tại trong mã nguồn do Error gây ra

---

#### Question 5

Sau một đợt kiểm thử, toàn bộ 500 test case đều **Pass**. Trưởng dự án tuyên bố: *"Phần mềm đã sạch lỗi, có thể release mà không cần lo lắng."* Theo **Nguyên lý 1** (Testing shows the presence of defects), đánh giá nào sau đây là đúng?

**Select one:**

- a. Tuyên bố đúng, vì 500 test case pass chứng minh không còn lỗi
- b. Tuyên bố đúng nếu 500 test case đã bao phủ 100% yêu cầu
- c. Tuyên bố sai, vì cần chạy thêm test case nữa thì mới kết luận được
- d. Tuyên bố sai, vì kiểm thử chỉ chứng minh sự hiện diện của lỗi chứ không thể chứng minh phần mềm không còn lỗi ✅ *(Chính xác. Đây là nội dung nguyên văn của Nguyên lý 1.)*

> Chính xác!
>
> Nguyên lý 1 khẳng định: kiểm thử **chứng minh phần mềm có lỗi**, nhưng **không bao giờ chứng minh được phần mềm không có lỗi** – dù pass bao nhiêu test case. Đáp án b sai vì ngay cả bao phủ 100% yêu cầu vẫn có thể sót lỗi; đáp án c sai vì vấn đề không nằm ở số lượng test case mà ở bản chất logic của nguyên lý.
>
> The correct answer is: Tuyên bố sai, vì kiểm thử chỉ chứng minh sự hiện diện của lỗi chứ không thể chứng minh phần mềm không còn lỗi

---

#### Question 6

Một form đăng ký có 10 trường, mỗi trường có khoảng 20 giá trị biên cần xét. Tester đề xuất "test hết mọi tổ hợp để chắc chắn không sót lỗi". Theo **Nguyên lý 2** (Exhaustive testing is impossible), hướng xử lý đúng là gì?

**Select one:**

- a. Đồng ý, vì chỉ có kiểm thử cạn kiệt mới đảm bảo chất lượng tuyệt đối
- b. Không thể test hết mọi tổ hợp đầu vào, nên dùng phân tích rủi ro (Risk) để ưu tiên những vùng quan trọng nhất ✅ *(Chính xác. Nguyên lý 2: không thể test cạn kiệt → dùng rủi ro để ưu tiên.)*
- c. Giảm số trường của form xuống để có thể test hết
- d. Chỉ test các trường hợp đúng (happy path) để tiết kiệm thời gian

> Chính xác!
>
> Số tổ hợp đầu vào tăng theo cấp số nhân nên kiểm thử cạn kiệt là **không thể** về mặt thực tế. Slide chỉ rõ giải pháp: dùng **rủi ro (Risk)** để ưu tiên nỗ lực kiểm thử vào những vùng quan trọng, dễ lỗi nhất. Đáp án a đi ngược nguyên lý; đáp án d quá cực đoan vì bỏ qua các trường hợp lỗi.
>
> The correct answer is: Không thể test hết mọi tổ hợp đầu vào, nên dùng phân tích rủi ro (Risk) để ưu tiên những vùng quan trọng nhất

---

#### Question 7

Trong buổi review tài liệu yêu cầu của hệ thống tính học phí, tester phát hiện hai yêu cầu mâu thuẫn nhau: một chỗ ghi "làm tròn xuống", chỗ khác ghi "làm tròn lên". Lỗi được sửa ngay trên tài liệu trước khi viết một dòng code nào. Đây là minh họa trực tiếp cho nguyên lý nào và lợi ích gì?

**Select one:**

- a. Nguyên lý 4 (quy tắc 80/20) – tập trung vào module tính học phí vì đây là module cốt lõi
- b. Nguyên lý 6 (phụ thuộc ngữ cảnh) – cách test hệ thống học phí khác với hệ thống khác
- c. Nguyên lý 3 – Kiểm thử sớm (Shift-left): bắt đầu test ngay từ khâu phân tích yêu cầu để tiết kiệm chi phí ✅ *(Chính xác. Phát hiện lỗi ở giai đoạn yêu cầu, trước khi code, chính là shift-left; sửa lỗi càng sớm càng rẻ.)*
- d. Nguyên lý 5 (nghịch lý thuốc trừ sâu) – cần cập nhật lại tài liệu yêu cầu thường xuyên

> Chính xác!
>
> **Shift-left** nghĩa là đưa hoạt động kiểm thử **sang trái** (sớm hơn) trong vòng đời: review tài liệu yêu cầu chính là kiểm thử ở khâu sớm nhất. Lợi ích: sửa một dòng chữ trong tài liệu rẻ hơn hàng trăm lần so với sửa code, build lại và test lại sau này. Các đáp án còn lại gán nhầm sang các nguyên lý khác.
>
> The correct answer is: Nguyên lý 3 – Kiểm thử sớm (Shift-left): bắt đầu test ngay từ khâu phân tích yêu cầu để tiết kiệm chi phí

---

#### Question 8

Thống kê sau 3 tháng của dự án: trong 120 bug được tìm thấy, có tới 96 bug tập trung ở 2 module "Thanh toán" và "Đăng nhập" trên tổng số 10 module. Là test lead với thời gian có hạn, bạn nên quyết định thế nào theo **Nguyên lý 4**?

**Select one:**

- a. Dồn nỗ lực kiểm thử vào 2 module có mật độ lỗi cao, vì 80% bug thường nằm trong 20% module cốt lõi ✅ *(Chính xác. Đây là nội dung quy tắc 80/20: sự tập trung của lỗi.)*
- b. Chia đều thời gian cho cả 10 module để đảm bảo công bằng
- c. Bỏ qua 2 module nhiều lỗi vì chúng đã được test kỹ rồi
- d. Chỉ test 2 module đó và bỏ hẳn 8 module còn lại

> Chính xác!
>
> Nguyên lý 4 (quy tắc 80/20): **80% số bug thường nằm trong 20% module cốt lõi** của hệ thống. Khi nguồn lực có hạn, ưu tiên kiểm thử sâu vào cụm module có mật độ lỗi cao là quyết định đúng dựa trên rủi ro. Đáp án b dàn trải nguồn lực; đáp án c và d là hai thái cực sai lầm (bỏ qua hẳn một phía).
>
> The correct answer is: Dồn nỗ lực kiểm thử vào 2 module có mật độ lỗi cao, vì 80% bug thường nằm trong 20% module cốt lõi

---

#### Question 9

Chọn **HAI** phát biểu **đúng** về **Nguyên lý 5 – Nghịch lý thuốc trừ sâu** (Pesticide paradox).

**Select one or more:**

- a. Nếu cứ lặp đi lặp lại một tập Test Case cũ, nó sẽ dần không tìm ra bug mới ✅ *(Đúng – đây chính là nội dung nghịch lý thuốc trừ sâu.)*
- b. Cần liên tục review và cập nhật, bổ sung Test Case mới để bắt được bug mới ✅ *(Đúng – đây là cách hóa giải nghịch lý.)*
- c. Nên xóa bỏ toàn bộ Test Case cũ sau mỗi lần release để tránh nghịch lý
- d. Chỉ cần chạy tự động hóa là đủ, không cần viết thêm Test Case mới

> Chính xác!
>
> Nghịch lý thuốc trừ sâu: chạy mãi một bộ test cũ giống như phun mãi một loại thuốc trừ sâu – sâu (bug mới) sẽ "kháng thuốc". Cách xử lý là **review và cập nhật** bộ test thường xuyên. Đáp án c sai vì test cũ vẫn có giá trị hồi quy; đáp án d sai vì tự động hóa không thay thế việc thiết kế test case mới.
>
> The correct answers are: Nếu cứ lặp đi lặp lại một tập Test Case cũ, nó sẽ dần không tìm ra bug mới, Cần liên tục review và cập nhật, bổ sung Test Case mới để bắt được bug mới

---

#### Question 10

Team A kiểm thử ứng dụng ngân hàng số: tập trung vào bảo mật, tính đúng đắn của giao dịch, khả năng chịu tải giờ cao điểm. Team B kiểm thử game mobile: tập trung vào trải nghiệm mượt mà, đồ họa, thời lượng pin. Sự khác biệt này minh họa cho nguyên lý nào?

**Select one:**

- a. Nguyên lý 1 – kiểm thử cho thấy sự hiện diện của lỗi
- b. Nguyên lý 5 – nghịch lý thuốc trừ sâu
- c. Nguyên lý 6 – kiểm thử phụ thuộc vào ngữ cảnh ✅ *(Chính xác. Test một app ngân hàng khác hoàn toàn với test một game mobile.)*
- d. Nguyên lý 7 – sự sai lầm về việc không có lỗi

> Chính xác!
>
> Nguyên lý 6 khẳng định **kiểm thử phụ thuộc ngữ cảnh**: mục tiêu, rủi ro và đặc thù của từng loại hệ thống quyết định chiến lược kiểm thử khác nhau. App ngân hàng ưu tiên bảo mật và tính đúng đắn giao dịch; game mobile ưu tiên trải nghiệm và hiệu năng. Không có một "công thức test chung" cho mọi phần mềm.
>
> The correct answer is: Nguyên lý 6 – kiểm thử phụ thuộc vào ngữ cảnh

---

#### Question 11

Ứng dụng quản lý chi tiêu chạy ổn định suốt 6 tháng, không phát hiện bug nào qua nhiều đợt kiểm thử. Tuy nhiên người dùng vẫn bỏ app hàng loạt vì thiếu tính năng "quét hóa đơn tự động" mà đối thủ đã có từ lâu. Theo **Nguyên lý 7**, kết luận nào sau đây là đúng?

**Select one:**

- a. Đây là thành công vì phần mềm không có lỗi
- b. Đây vẫn là thất bại, vì phần mềm không có bug nhưng không đáp ứng đúng nhu cầu người dùng thì vẫn là phần mềm thất bại ✅ *(Chính xác. Đây là nội dung nguyên văn của Nguyên lý 7 – "sự sai lầm về việc không có lỗi".)*
- c. Đây là lỗi của team kiểm thử vì đã không tìm ra bug
- d. Nguyên lý 7 không áp dụng vì app không hề có lỗi kỹ thuật

> Chính xác!
>
> Nguyên lý 7 – *Absence-of-errors fallacy*: **phần mềm không có bug nhưng không đáp ứng đúng nhu cầu người dùng thì vẫn là phần mềm thất bại**. Chất lượng không chỉ là "không có lỗi" mà còn là "đúng cái người dùng cần" (liên hệ với Validation ở Nguyên lý V&V). Đáp án a và d đều mắc đúng sai lầm mà nguyên lý này cảnh báo.
>
> The correct answer is: Đây vẫn là thất bại, vì phần mềm không có bug nhưng không đáp ứng đúng nhu cầu người dùng thì vẫn là phần mềm thất bại

---

#### Question 12

Bạn An là developer vừa viết xong module tính lương. An tự kiểm thử module của mình và kết luận "không có lỗi". Theo phần **Tâm lý học trong kiểm thử** (Chương 1), rủi ro lớn nhất ở đây là gì?

**Select one:**

- a. Developer không đủ kỹ năng để kiểm thử vì chỉ tester mới biết test
- b. Không có rủi ro, vì developer là người hiểu code rõ nhất nên tự test là tốt nhất
- c. Tester sẽ cảm thấy bị xúc phạm vì công việc của mình bị lấn át
- d. An dễ mắc thiên kiến xác nhận (confirmation bias) vì tâm lý "xây dựng" muốn chứng minh code chạy đúng, khác với tâm lý "phá vỡ" của tester ✅ *(Chính xác. Developer: mong phần mềm hoạt động đúng (xây dựng); Tester: tìm mọi cách chứng minh phần mềm sai (phá vỡ). Cần duy trì sự độc lập trong kiểm thử.)*

> Chính xác!
>
> Slide nêu rõ sự khác biệt tư duy: **Developer** có tâm lý xây dựng (muốn code chạy đúng), **Tester** có tâm lý phá vỡ (tìm mọi cách chứng minh sai). Người tự test code của mình dễ rơi vào **thiên kiến xác nhận** – vô thức chỉ test những case mình nghĩ là đúng. Vì vậy cần duy trì **sự độc lập trong kiểm thử**, và việc tìm ra lỗi là để cải thiện chất lượng chung, không phải chỉ trích cá nhân.
>
> The correct answer is: An dễ mắc thiên kiến xác nhận (confirmation bias) vì tâm lý "xây dựng" muốn chứng minh code chạy đúng, khác với tâm lý "phá vỡ" của tester

---

#### Question 13

Dự án phần mềm quản lý thư viện được phát triển theo mô hình mà mỗi giai đoạn phát triển (yêu cầu, thiết kế, lập trình) đều có một cấp độ kiểm thử tương ứng để xác nhận và phê chuẩn, và kế hoạch kiểm thử được lập từ rất sớm. Đây là đặc trưng của mô hình nào?

**Select one:**

- a. Mô hình thác nước (Waterfall) thuần túy, vì kiểm thử nằm sau lập trình
- b. Mô hình V-Model – sự mở rộng của Waterfall, mỗi giai đoạn phát triển có cấp độ kiểm thử tương ứng, kiểm thử được lên kế hoạch từ sớm (Shift-left) ✅ *(Chính xác. Đúng định nghĩa và ưu điểm của V-Model trong slide.)*
- c. Mô hình Agile/Scrum, vì có sự tương ứng giữa các giai đoạn
- d. Mô hình Big Bang, vì tất cả các giai đoạn được thực hiện đồng thời

> Chính xác!
>
> **V-Model** là sự mở rộng của Waterfall với đặc trưng: **mỗi giai đoạn phát triển có một cấp độ kiểm thử tương ứng** để Verification và Validation. Ưu điểm lớn nhất là kiểm thử được **lên kế hoạch từ rất sớm (Shift-left)**; nhược điểm là thiếu linh hoạt trước thay đổi yêu cầu. Đáp án a sai vì Waterfall thuần túy xem kiểm thử là giai đoạn nằm sau lập trình, không có sự tương ứng từng cặp.
>
> The correct answer is: Mô hình V-Model – sự mở rộng của Waterfall, mỗi giai đoạn phát triển có cấp độ kiểm thử tương ứng, kiểm thử được lên kế hoạch từ sớm (Shift-left)

---

#### Question 14

Dự án áp dụng V-Model. Theo tinh thần Shift-left của mô hình này, **kế hoạch và test case cho kiểm thử chấp nhận (Acceptance Testing)** nên được chuẩn bị vào thời điểm nào?

**Select one:**

- a. Sau khi lập trình xong toàn bộ hệ thống
- b. Song song với giai đoạn kiểm thử hệ thống
- c. Ngay từ giai đoạn phân tích yêu cầu, vì mỗi giai đoạn phát triển có cấp độ kiểm thử tương ứng được lên kế hoạch sớm ✅ *(Chính xác. Ưu điểm của V-Model là kiểm thử được lên kế hoạch từ rất sớm – acceptance test tương ứng với giai đoạn yêu cầu.)*
- d. Chỉ khi khách hàng yêu cầu nghiệm thu

> Chính xác!
>
> Trong V-Model, nhánh bên trái (phát triển) và nhánh bên phải (kiểm thử) tương ứng từng cặp: **yêu cầu ↔ acceptance testing**, thiết kế hệ thống ↔ system testing, thiết kế chi tiết ↔ integration testing, code ↔ unit testing. Nhờ đó, test case cho acceptance testing có thể được thiết kế **ngay từ khi có tài liệu yêu cầu**, thay vì đợi đến cuối dự án – đó chính là Shift-left.
>
> The correct answer is: Ngay từ giai đoạn phân tích yêu cầu, vì mỗi giai đoạn phát triển có cấp độ kiểm thử tương ứng được lên kế hoạch sớm

---

#### Question 15

Một công ty làm phần mềm theo mô hình tuần tự. Giữa chừng, khách hàng liên tục thay đổi yêu cầu về cách tính chiết khấu, khiến team phải quay lại sửa thiết kế và code nhiều lần, tiến độ trễ nghiêm trọng. Theo slide Chương 2, đây là nhược điểm của mô hình nào và bài học rút ra là gì?

**Select one:**

- a. Nhược điểm của Agile, vì Agile không có tài liệu yêu cầu
- b. Nhược điểm của V-Model – mở rộng của Waterfall: thiếu linh hoạt, khó phản ứng với sự thay đổi yêu cầu giữa chừng ✅ *(Chính xác. Slide nêu rõ nhược điểm của V-Model là thiếu linh hoạt trước thay đổi yêu cầu.)*
- c. Nhược điểm của kiểm thử hộp đen, vì không nhìn thấy code
- d. Không phải nhược điểm mô hình mà do tester làm việc kém

> Chính xác!
>
> Slide Chương 2 nêu rõ nhược điểm của **V-Model**: **thiếu linh hoạt, khó phản ứng với sự thay đổi yêu cầu giữa chừng**. Với dự án có yêu cầu biến động mạnh, mô hình lặp và tăng dần (Agile/Scrum) với các sprint ngắn 2–4 tuần sẽ phù hợp hơn. Đáp án a sai vì Agile sinh ra chính để thích ứng với thay đổi.
>
> The correct answer is: Nhược điểm của V-Model – mở rộng của Waterfall: thiếu linh hoạt, khó phản ứng với sự thay đổi yêu cầu giữa chừng

---

#### Question 16

Trong team Scrum phát triển app giao đồ ăn (sprint 2 tuần), tester Bình có thói quen đợi developer code xong hết tính năng rồi mới bắt đầu viết test case và kiểm thử. Theo slide về **vai trò của Tester trong Agile**, thói quen này có vấn đề gì?

**Select one:**

- a. Không có vấn đề, vì kiểm thử theo định nghĩa là giai đoạn sau lập trình
- b. Sai, vì tester Agile không được đợi code xong mới test mà phải làm việc cùng Product Owner và Developer hàng ngày ✅ *(Chính xác. Slide: "Không đợi code xong mới test. Phải làm việc cùng Product Owner và Developer hàng ngày.")*
- c. Sai, vì trong Agile không cần tester, developer tự test là đủ
- d. Đúng, vì sprint chỉ kéo dài 2 tuần nên phải test dồn vào cuối

> Chính xác!
>
> Trong Agile/Scrum, tính năng được đóng gói và giao liên tục qua các sprint ngắn (2–4 tuần). Tester **không đợi code xong mới test** mà tham gia từ sớm: cùng PO làm rõ yêu cầu, cùng dev thống nhất tiêu chí hoàn thành, test ngay khi có bản dựng. Thói quen "đợi code xong" là tư duy Waterfall, sẽ khiến kiểm thử không bao giờ theo kịp tốc độ sprint.
>
> The correct answer is: Sai, vì tester Agile không được đợi code xong mới test mà phải làm việc cùng Product Owner và Developer hàng ngày

---

#### Question 17

Chọn **HAI** phát biểu **đúng** về thách thức và "giải pháp sinh tồn" của kiểm thử trong Agile/Scrum theo slide Chương 2.

**Select one or more:**

- a. Tài liệu yêu cầu (Requirement) thường không đầy đủ và thay đổi liên tục ✅ *(Đúng – đây là thách thức được nêu trong slide.)*
- b. Bắt buộc phải áp dụng kiểm thử tự động (Automation Testing) để theo kịp tốc độ kiểm thử hồi quy của CI/CD Pipelines ✅ *(Đúng – đây là "giải pháp sinh tồn" trong slide.)*
- c. Tester nên đợi đến cuối sprint mới kiểm thử một lần cho hiệu quả
- d. Trong Agile không cần kiểm thử hồi quy vì mỗi sprint đều là tính năng mới

> Chính xác!
>
> Slide nêu rõ thách thức của Agile: **tài liệu thường không đầy đủ và thay đổi liên tục**; và giải pháp sinh tồn: **bắt buộc áp dụng kiểm thử tự động** để theo kịp tốc độ hồi quy của CI/CD. Đáp án c đi ngược vai trò tester Agile (phải test liên tục, không đợi cuối sprint); đáp án d sai vì thay đổi liên tục càng khiến hồi quy trở nên quan trọng.
>
> The correct answers are: Tài liệu yêu cầu (Requirement) thường không đầy đủ và thay đổi liên tục, Bắt buộc phải áp dụng kiểm thử tự động (Automation Testing) để theo kịp tốc độ kiểm thử hồi quy của CI/CD Pipelines

---

#### Question 18

Chọn **HAI** phát biểu **đúng** về Stub và Mock khi kiểm thử đơn vị (theo slide Chương 2).

**Select one or more:**

- a. Stub trả về dữ liệu cứng (hardcode) để thay thế thành phần phụ thuộc chưa hoàn thiện ✅ *(Đúng – đúng định nghĩa Stub trong slide.)*
- b. Mock kiểm tra hành vi, ví dụ hàm có được gọi đúng tham số không ✅ *(Đúng – đúng định nghĩa Mock trong slide.)*
- c. Stub dùng để kiểm tra xem hàm có được gọi đúng số lần không
- d. Mock và Stub là một, không có sự khác biệt nào

> Chính xác!
>
> Khi unit test, các thành phần phụ thuộc chưa hoàn thiện được thay bằng đối tượng giả lập: **Stub** trả về dữ liệu cứng (hardcode) – ví dụ minh họa trong slide dùng `jest.fn().mockReturnValue({status: 1})` để giả lập API; **Mock** còn kiểm tra **hành vi** – hàm có được gọi không, gọi với tham số nào. Đáp án c mô tả Mock nhưng gán cho Stub nên sai.
>
> The correct answers are: Stub trả về dữ liệu cứng (hardcode) để thay thế thành phần phụ thuộc chưa hoàn thiện, Mock kiểm tra hành vi, ví dụ hàm có được gọi đúng tham số không

---

#### Question 19

Hàm `tinhHocPhi(tinChi, donGia)` là một hàm độc lập trong module tài chính. Để kiểm thử đơn vị (Unit Testing) cho hàm này theo đúng slide Chương 2, ai là người phù hợp nhất để thực hiện và với cách tiếp cận nào?

**Select one:**

- a. Tester thực hiện kiểm thử hộp đen dựa trên tài liệu yêu cầu
- b. Khách hàng thực hiện kiểm thử chấp nhận trên môi trường thật
- c. Developer thực hiện, có thể áp dụng TDD (Test Driven Development), cô lập hàm để kiểm tra riêng ✅ *(Chính xác. Slide: Unit test thường do Developer thực hiện, áp dụng TDD, mục tiêu cô lập từng thành phần nhỏ nhất.)*
- d. Tester thực hiện kiểm thử hệ thống trên môi trường staging

> Chính xác!
>
> **Kiểm thử đơn vị** có mục tiêu **cô lập và kiểm tra từng thành phần mã nguồn nhỏ nhất** (hàm, phương thức, lớp) và **thường do Developer thực hiện** (áp dụng TDD). Đáp án a nhầm với kiểm thử chức năng ở cấp hệ thống; đáp án d là system testing – kiểm tra toàn bộ hệ thống đã lắp ráp hoàn chỉnh.
>
> The correct answer is: Developer thực hiện, có thể áp dụng TDD (Test Driven Development), cô lập hàm để kiểm tra riêng

---

#### Question 20

Ứng dụng bán hàng của công ty gọi sang **API thanh toán của MoMo** để xử lý giao dịch. Team kiểm thử muốn kiểm tra luồng dữ liệu và sự giao tiếp giữa app và cổng thanh toán này. Theo slide Chương 2, đây thuộc mức độ tích hợp nào?

**Select one:**

- a. Kiểm thử đơn vị, vì chỉ kiểm tra một API
- b. Component Integration, vì MoMo là một component của hệ thống
- c. Kiểm thử hệ thống, vì đã có sự tham gia của người dùng cuối
- d. System Integration – tích hợp giữa các hệ thống khác nhau (app mua hàng gọi sang API thanh toán của MoMo/VNPAY) ✅ *(Chính xác. Đây là ví dụ nguyên văn trong slide cho System Integration.)*

> Chính xác!
>
> Slide phân biệt hai mức độ: **Component Integration** – tích hợp các module trong cùng một hệ thống (VD: Controller gọi tới Database); **System Integration** – tích hợp giữa các hệ thống khác nhau, và ví dụ nguyên văn là *"App mua hàng gọi sang API thanh toán của MoMo/VNPAY"*. Đáp án b sai vì MoMo là hệ thống độc lập bên ngoài, không phải module nội bộ.
>
> The correct answer is: System Integration – tích hợp giữa các hệ thống khác nhau (app mua hàng gọi sang API thanh toán của MoMo/VNPAY)

---

#### Question 21

Team có 5 module đã code xong. Test lead quyết định **gộp tất cả 5 module lại một lần rồi mới kiểm thử** sự giao tiếp giữa chúng. Đây là chiến lược tích hợp nào trong các chiến lược được liệt kê ở slide Chương 2?

**Select one:**

- a. Top-down, vì tích hợp từ module trên cùng xuống
- b. Bottom-up, vì tích hợp từ module dưới cùng lên
- c. Big Bang – tích hợp toàn bộ các module cùng một lúc rồi kiểm thử ✅ *(Chính xác. Big Bang là chiến lược gộp tất cả module lại rồi test một lần.)*
- d. V-Model, vì đây là mô hình phát triển tương ứng

> Chính xác!
>
> Slide Chương 2 liệt kê các chiến lược tích hợp phổ biến: **Top-down** (tích hợp dần từ trên xuống), **Bottom-up** (tích hợp dần từ dưới lên), **Big Bang** (tích hợp tất cả cùng lúc rồi mới test). Việc gộp 5 module một lần rồi mới kiểm thử chính là Big Bang – nhanh nhưng khi có lỗi sẽ khó xác định lỗi nằm ở điểm giao tiếp nào.
>
> The correct answer is: Big Bang – tích hợp toàn bộ các module cùng một lúc rồi kiểm thử

---

#### Question 22

Sau khi tất cả module đã được tích hợp, team triển khai toàn bộ hệ thống thương mại điện tử lên **môi trường Staging được cấu hình giống hệt Production**, rồi cho tester đi trọn luồng end-to-end: đăng ký → tìm hàng → đặt hàng → thanh toán, dưới góc nhìn của người mua hàng thực tế. Đây là cấp độ kiểm thử nào?

**Select one:**

- a. Kiểm thử tích hợp, vì các module đã được gộp lại
- b. Kiểm thử hệ thống (System Testing) – kiểm tra toàn bộ hệ thống đã lắp ráp hoàn chỉnh, dưới góc nhìn end-user, trên môi trường giống Production nhất có thể ✅ *(Chính xác. Đúng cả 3 dấu hiệu của System Testing trong slide.)*
- c. Kiểm thử đơn vị, vì mỗi bước trong luồng được test riêng
- d. Kiểm thử chấp nhận, vì đã có góc nhìn của người dùng cuối

> Chính xác!
>
> **System Testing**: mục tiêu kiểm tra **toàn bộ hệ thống sau khi lắp ráp hoàn chỉnh**, đứng từ **góc độ người dùng cuối (end-to-end)**, và cần môi trường test (Staging) **giống hệt Production** nhất có thể. Đáp án d sai vì acceptance testing là do khách hàng/người dùng cuối trực tiếp nghiệm thu, còn ở đây người thực hiện vẫn là tester.
>
> The correct answer is: Kiểm thử hệ thống (System Testing) – kiểm tra toàn bộ hệ thống đã lắp ráp hoàn chỉnh, dưới góc nhìn end-user, trên môi trường giống Production nhất có thể

---

#### Question 23

Công ty phát hành bản beta của app học tiếng Anh cho **200 người dùng thực tế bên ngoài** đăng ký dùng thử trước, để thu thập phản hồi trước khi phát hành chính thức. Theo phân loại Acceptance Testing trong slide, đây là loại kiểm thử nào?

**Select one:**

- a. UAT (User Acceptance Testing), vì có người dùng tham gia
- b. Alpha Testing, vì đây là vòng kiểm thử trước khi release
- c. Kiểm thử hệ thống, vì test toàn bộ hệ thống
- d. Beta Testing – mở cho một nhóm nhỏ người dùng thực tế bên ngoài sử dụng trước để thu thập phản hồi (Early access) ✅ *(Chính xác. Đúng định nghĩa Beta Testing trong slide.)*

> Chính xác!
>
> Slide phân biệt: **UAT** – khách hàng/người dùng cuối trực tiếp dùng thử để nghiệm thu; **Alpha Testing** – người dùng **nội bộ** (nhân viên công ty) test ở môi trường dev/test; **Beta Testing** – mở cho nhóm nhỏ **người dùng thực tế bên ngoài** dùng trước để thu thập phản hồi. Tình huống có 200 người dùng thật bên ngoài → Beta.
>
> The correct answer is: Beta Testing – mở cho một nhóm nhỏ người dùng thực tế bên ngoài sử dụng trước để thu thập phản hồi (Early access)

---

#### Question 24

Chọn **các** loại kiểm thử thuộc nhóm **Non-functional** (phi chức năng) theo phân loại Test Types trong slide Chương 2. Biết rằng Functional trả lời "hệ thống **làm cái gì**", còn Non-functional trả lời "hệ thống **làm tốt thế nào**".

**Select one or more:**

- a. Kiểm thử chịu tải với 10.000 người dùng truy cập đồng thời ✅ *(Đúng – Performance/Load là non-functional.)*
- b. Kiểm thử bảo mật: ngăn chặn tấn công SQL Injection vào form đăng nhập ✅ *(Đúng – Security là non-functional.)*
- c. Kiểm thử tính đúng đắn của công thức tính tiền học phí
- d. Đánh giá mức độ dễ sử dụng (Usability) của giao diện đăng ký ✅ *(Đúng – Usability là non-functional.)*

> Chính xác!
>
> **Functional** kiểm tra hệ thống *làm cái gì* (tính toán, luồng nghiệp vụ – như đáp án c). **Non-functional** kiểm tra hệ thống *làm tốt thế nào*: Performance, Load, Security, Usability. Vì vậy a (tải), b (bảo mật), d (dễ sử dụng) đều là non-functional; c là functional.
>
> The correct answers are: Kiểm thử chịu tải với 10.000 người dùng truy cập đồng thời, Kiểm thử bảo mật: ngăn chặn tấn công SQL Injection vào form đăng nhập, Đánh giá mức độ dễ sử dụng (Usability) của giao diện đăng ký

---

#### Question 25

Tester đọc mã nguồn của hàm `xepLoai(diem)`, vẽ sơ đồ các nhánh `if-else` rồi thiết kế test case sao cho mọi dòng lệnh trong hàm đều được thực thi ít nhất một lần (Statement coverage). Đây là loại kiểm thử nào?

**Select one:**

- a. Kiểm thử hộp đen, vì dựa trên yêu cầu xếp loại
- b. Kiểm thử tĩnh, vì có đọc mã nguồn mà không chạy
- c. White-box (hộp trắng) – test dựa trên cấu trúc code bên trong, ví dụ phủ lệnh (Statement coverage) ✅ *(Chính xác. Đúng định nghĩa White-box trong slide.)*
- d. Kiểm thử chấp nhận, vì kiểm tra yêu cầu người dùng

> Chính xác!
>
> **White-box**: test **dựa trên cấu trúc code**, trả lời "hệ thống được xây dựng thế nào", với kỹ thuật điển hình là **phủ lệnh (Statement coverage)**. Vì tester phải đọc và phân tích mã nguồn nên đây là hộp trắng. Đáp án b sai vì ở đây tester vẫn **thực thi** test case (đo độ phủ), không chỉ đọc code.
>
> The correct answer is: White-box (hộp trắng) – test dựa trên cấu trúc code bên trong, ví dụ phủ lệnh (Statement coverage)

---

#### Question 26

Tester nhận tài liệu đặc tả của chức năng "Quên mật khẩu" và thiết kế toàn bộ test case chỉ dựa trên đặc tả này, **không hề mở mã nguồn** để xem cài đặt bên trong. Cách tiếp cận này được gọi là gì và nó trả lời câu hỏi nào?

**Select one:**

- a. White-box – trả lời "hệ thống được xây dựng thế nào"
- b. Black-box (hộp đen) – dựa trên tài liệu yêu cầu, trả lời "hệ thống làm gì" ✅ *(Chính xác. Đúng định nghĩa Black-box trong slide.)*
- c. Kiểm thử tĩnh – vì không thực thi mã nguồn
- d. Kiểm thử hồi quy – vì kiểm tra lại chức năng cũ

> Chính xác!
>
> **Black-box**: thiết kế test **dựa trên tài liệu yêu cầu** (Requirements/Specifications) mà không quan tâm cấu trúc bên trong, trả lời câu hỏi **"Hệ thống làm gì?"**. Đáp án c sai vì tester vẫn thực thi test case trên phần mềm đang chạy (kiểm thử động), chỉ là không nhìn vào code.
>
> The correct answer is: Black-box (hộp đen) – dựa trên tài liệu yêu cầu, trả lời "hệ thống làm gì"

---

#### Question 27

Sau khi developer sửa lỗi "không đăng nhập được khi mật khẩu có ký tự đặc biệt", tester chạy lại **đúng test case đã phát hiện ra lỗi đó** để xác nhận lỗi đã được sửa, sau đó chạy tiếp bộ test case của toàn module "Tài khoản" để đảm bảo việc sửa lỗi không làm hỏng chức năng khác. Hai hoạt động này lần lượt là gì?

**Select one:**

- a. Cả hai đều là Regression Test
- b. Cả hai đều là Confirmation Test
- c. Lần 1 là Regression Test, lần 2 là Confirmation Test
- d. Lần 1 là Confirmation Test (Re-test) – kiểm tra lại lỗi đã sửa; lần 2 là Regression Test – đảm bảo thay đổi không phá vỡ chức năng cũ ✅ *(Chính xác. Đúng phân biệt Change-related testing trong slide.)*

> Chính xác!
>
> Nhóm **Change-related** gồm: **Confirmation Test (Re-test)** – chạy lại test case của chính bug vừa fix để xác nhận đã sửa đúng; **Regression Test (Hồi quy)** – chạy lại các test liên quan để đảm bảo thay đổi code không gây lỗi mới ở chức năng cũ. Thứ tự đúng trong tình huống: re-test trước, hồi quy sau.
>
> The correct answer is: Lần 1 là Confirmation Test (Re-test) – kiểm tra lại lỗi đã sửa; lần 2 là Regression Test – đảm bảo thay đổi không phá vỡ chức năng cũ

---

#### Question 28

Hệ thống bán vé đã chạy ổn định trên Production được 1 năm. Nay công ty **nâng cấp server cơ sở dữ liệu** lên phiên bản mới (không thay đổi tính năng). Theo slide Chương 2, team kiểm thử cần làm gì?

**Select one:**

- a. Không cần kiểm thử vì không thay đổi tính năng nào
- b. Chỉ kiểm thử đơn vị cho các hàm truy vấn dữ liệu
- c. Thực hiện kiểm thử bảo trì (Maintenance Testing) – trường hợp thay đổi môi trường (Environmental), và bắt buộc phân tích tác động (Impact Analysis) để quyết định phạm vi kiểm thử hồi quy ✅ *(Chính xác. Nâng cấp môi trường là một trong 3 trigger của maintenance testing; impact analysis là yêu cầu bắt buộc.)*
- d. Thực hiện kiểm thử chấp nhận Alpha với nhân viên công ty

> Chính xác!
>
> **Kiểm thử bảo trì** được kích hoạt khi hệ thống đã live, với 3 trường hợp: **Bổ sung** tính năng mới (Enhancement), **Sửa lỗi** khẩn cấp (Corrective), **Thay đổi môi trường** (Environmental – như nâng cấp OS, đổi server, chuyển CSDL). Nâng cấp server CSDL thuộc trường hợp thứ ba, và slide yêu cầu **bắt buộc phân tích tác động (Impact Analysis)** để quyết định phạm vi hồi quy hiệu quả, tránh test mù quáng.
>
> The correct answer is: Thực hiện kiểm thử bảo trì (Maintenance Testing) – trường hợp thay đổi môi trường (Environmental), và bắt buộc phân tích tác động (Impact Analysis) để quyết định phạm vi kiểm thử hồi quy

---

#### Question 29

Team tổ chức một buổi họp để **đọc và rà soát tài liệu đặc tả yêu cầu** của module đăng ký học phần, phát hiện 3 điểm mâu thuẫn trước khi developer viết code. Hoạt động này thuộc loại kiểm thử nào và đặc điểm của nó là gì?

**Select one:**

- a. Kiểm thử động, vì đã phát hiện ra lỗi trong tài liệu
- b. Kiểm thử tĩnh (Static Testing) – KHÔNG thực thi mã nguồn, áp dụng cho tài liệu yêu cầu, thiết kế và code review ✅ *(Chính xác. Đúng định nghĩa kiểm thử tĩnh trong slide.)*
- c. Kiểm thử hộp trắng, vì đã đọc kỹ tài liệu kỹ thuật
- d. Kiểm thử chấp nhận, vì rà soát yêu cầu của khách hàng

> Chính xác!
>
> **Kiểm thử tĩnh KHÔNG thực thi mã nguồn** và áp dụng được cho **tài liệu yêu cầu, bản thiết kế, mã nguồn (code review)** – tức là kiểm thử được cả khi chưa có code để chạy. Buổi rà soát tài liệu đặc tả chính là kiểm thử tĩnh. Đáp án a sai vì "động" đòi hỏi phải thực thi phần mềm.
>
> The correct answer is: Kiểm thử tĩnh (Static Testing) – KHÔNG thực thi mã nguồn, áp dụng cho tài liệu yêu cầu, thiết kế và code review

---

#### Question 30

Trong buổi review tài liệu thiết kế, reviewer phát hiện: màn hình "Thanh toán" yêu cầu nhập "Số thẻ 16 chữ số" nhưng tài liệu luồng nghiệp vụ lại ghi "hỗ trợ cả thẻ 15 chữ số". Theo bảng so sánh Static vs Dynamic trong slide, việc phát hiện này có ý nghĩa gì?

**Select one:**

- a. Đây là kiểm thử động vì đã tìm ra Failure của hệ thống thanh toán
- b. Đây là kiểm thử hiệu năng vì liên quan đến định dạng dữ liệu thẻ
- c. Đây là kiểm thử tĩnh, phát hiện trực tiếp Defect (nguyên nhân gốc rễ) thay vì đợi nó bộc lộ thành Failure khi chạy ✅ *(Chính xác. Static phát hiện Defect trực tiếp; Dynamic phát hiện Failure – hậu quả bộc lộ ra ngoài.)*
- d. Phát hiện này không có giá trị vì tài liệu chưa phải là sản phẩm

> Chính xác!
>
> Bảng so sánh trong slide: **kiểm thử tĩnh phát hiện Defect trực tiếp (nguyên nhân gốc rễ)**, còn **kiểm thử động phát hiện Failure (hậu quả của Defect khi bộc lộ ra ngoài)**. Mâu thuẫn trong tài liệu thiết kế chính là một Defect ở dạng "thai nghén" – nếu không bắt ở đây, nó sẽ biến thành Failure khi người dùng nhập thẻ 15 số mà hệ thống từ chối.
>
> The correct answer is: Đây là kiểm thử tĩnh, phát hiện trực tiếp Defect (nguyên nhân gốc rễ) thay vì đợi nó bộc lộ thành Failure khi chạy

---

#### Question 31

Hai cách phát hiện cùng một lỗi sai công thức tính điểm: **Cách A** – reviewer phát hiện khi đọc tài liệu thiết kế, sửa mất 5 phút; **Cách B** – phát hiện khi hệ thống đã release, phải sửa code, build lại, test lại và phát hành bản vá, tốn 3 ngày công. Ví dụ này minh họa giá trị nào của kiểm thử tĩnh?

**Select one:**

- a. Kiểm thử tĩnh giúp loại bỏ hoàn toàn nhu cầu kiểm thử động
- b. Kiểm thử tĩnh chỉ có giá trị với tài liệu, không áp dụng cho code
- c. Kiểm thử tĩnh giúp tự động hóa toàn bộ quy trình kiểm thử
- d. Giá trị Shift-Left: phát hiện lỗi cực sớm và tiết kiệm chi phí khổng lồ – sửa một dòng trong tài liệu rẻ hơn hàng trăm lần so với sửa code, build lại và test lại ✅ *(Chính xác. Đúng 2 giá trị đầu tiên của kiểm thử tĩnh trong slide.)*

> Chính xác!
>
> Slide nêu các giá trị của kiểm thử tĩnh (Shift-Left): **phát hiện lỗi cực sớm** (trước cả khi code được viết, qua review tài liệu thiết kế) và **tiết kiệm chi phí khổng lồ** – sửa một dòng chữ trong tài liệu rẻ hơn hàng trăm lần so với sửa code, build lại hệ thống và test lại từ đầu. Đây cũng chính là lý do "lỗi phát hiện càng muộn, chi phí khắc phục càng tăng theo cấp số nhân".
>
> The correct answer is: Giá trị Shift-Left: phát hiện lỗi cực sớm và tiết kiệm chi phí khổng lồ – sửa một dòng trong tài liệu rẻ hơn hàng trăm lần so với sửa code, build lại và test lại

---

#### Question 32

Đoạn code sau được đưa vào kiểm thử nhưng **chưa bao giờ được chạy**:

```javascript
function processData(userInput) {
  const apiKey = "12345-ABCDE";   // khóa API ghi cứng trong code
  let dataList = [];
  return userInput.toUpperCase();
  console.log("Done!");           // dòng này không bao giờ chạy tới
}
```

Theo slide Chương 3, đây là ví dụ cho nhóm lỗi mà **kiểm thử tĩnh tìm ra nhưng kiểm thử động khó thấy**. Các lỗi trong đoạn code gồm:

**Select one:**

- a. Chỉ có lỗi cú pháp, vì code chưa được biên dịch
- b. Biến `apiKey` ghi cứng gây rủi ro bảo mật, biến `dataList` không dùng đến (code rác), và dòng `console.log` sau `return` là unreachable code ✅ *(Chính xác. Đúng 3 cảnh báo trong kết quả quét ESLint/SonarQube của slide.)*
- c. Lỗi logic tính toán sai kết quả của `toUpperCase`
- d. Không có lỗi nào vì code vẫn chạy đúng chức năng chính

> Chính xác!
>
> Slide liệt kê những lỗi mà kiểm thử tĩnh phát hiện còn kiểm thử động khó thấy: **lỗ hổng bảo mật** (hardcoded credential), **code khó bảo trì**, **biến chưa sử dụng**, **vòng lặp vô hạn**... Kết quả quét mẫu trong slide chỉ rõ: `no-unused-vars` (apiKey, dataList), `no-hardcoded-credentials` (rủi ro bảo mật), `no-unreachable` (code sau return không bao giờ chạy tới). Đáp án d sai vì "chạy đúng chức năng chính" không có nghĩa là không có defect.
>
> The correct answer is: Biến `apiKey` ghi cứng gây rủi ro bảo mật, biến `dataList` không dùng đến (code rác), và dòng `console.log` sau `return` là unreachable code

---

#### Question 33

Chọn **HAI** phát biểu **đúng** về các vai trò trong một buổi Review chính thức theo slide Chương 3.

**Select one or more:**

- a. Scribe (Thư ký): ghi chép lại các lỗi được tìm thấy và các quyết định đưa ra ✅ *(Đúng – đúng định nghĩa vai trò Scribe trong slide.)*
- b. Moderator/Facilitator (Người điều phối): dẫn dắt buổi review, đảm bảo đúng tiến độ và hiệu quả ✅ *(Đúng – đúng định nghĩa vai trò Moderator trong slide.)*
- c. Author (Tác giả): là người quyết định việc thực hiện review và phân bổ thời gian
- d. Reviewer (Người đánh giá): là người viết ra tài liệu/code được review

> Chính xác!
>
> Các vai trò trong review chính thức: **Author** – người viết tài liệu/code, giải thích và sửa lỗi sau review; **Moderator** – dẫn dắt buổi review, đảm bảo tiến độ và hiệu quả; **Reviewer** – kiểm tra tài liệu, tìm lỗi (có thể là Dev, Tester, BA); **Scribe** – ghi chép lỗi và quyết định; **Manager** – quyết định việc thực hiện review, phân bổ thời gian. Đáp án c mô tả Manager nhưng gán cho Author; đáp án d mô tả Author nhưng gán cho Reviewer.
>
> The correct answers are: Scribe (Thư ký): ghi chép lại các lỗi được tìm thấy và các quyết định đưa ra, Moderator/Facilitator (Người điều phối): dẫn dắt buổi review, đảm bảo đúng tiến độ và hiệu quả

---

#### Question 34

Developer Mai viết xong một hàm xử lý chuỗi, cô quay sang **nhờ đồng nghiệp ngồi cạnh xem hộ** đoạn code trong 10 phút để bắt lỗi sơ suất. Theo phân loại 4 loại hình Review trong slide, đây là loại nào?

**Select one:**

- a. Inspection, vì có người khác kiểm tra code
- b. Walkthrough, vì đồng nghiệp đi qua từng dòng code
- c. Informal Review – review không chính thức, ví dụ Pair programming / Buddy check ✅ *(Chính xác. Đúng định nghĩa Informal Review trong slide.)*
- d. Technical Review, vì đây là đánh giá kỹ thuật

> Chính xác!
>
> Bốn loại hình review từ không chính thức đến chính thức: **Informal Review** (nhờ đồng nghiệp ngồi cạnh xem hộ – Pair programming/Buddy check), **Walkthrough** (tác giả dẫn dắt team đi qua tài liệu), **Technical Review** (chuyên gia đánh giá tính khả thi của thiết kế), **Inspection** (khắt khe nhất, có Moderator, theo checklist). Việc "nhờ người ngồi cạnh xem hộ" chính là ví dụ nguyên văn của Informal Review.
>
> The correct answer is: Informal Review – review không chính thức, ví dụ Pair programming / Buddy check

---

#### Question 35

Trong buổi họp review bản thiết kế module "Điểm danh bằng QR", chính **tác giả của bản thiết kế** là người **dẫn dắt cả team đi qua từng phần** của tài liệu, vừa giải thích ý tưởng vừa thu thập ý kiến đóng góp. Đây là loại hình review nào?

**Select one:**

- a. Informal Review, vì không khí buổi họp khá thoải mái
- b. Walkthrough – tác giả dẫn dắt team đi qua từng phần của tài liệu/code để giải thích và thu thập ý kiến ✅ *(Chính xác. Đúng định nghĩa Walkthrough trong slide.)*
- c. Inspection, vì có cả team tham gia
- d. Technical Review, vì tài liệu này mang tính kỹ thuật

> Chính xác!
>
> Điểm nhận dạng của **Walkthrough**: **chính tác giả** là người dẫn dắt, mục đích là **giải thích và thu thập ý kiến** (mang tính giáo dục, tìm hiểu). Khác với Inspection – nơi reviewer đã đọc trước tài liệu và buổi họp tập trung vào việc **tìm lỗi theo checklist** dưới sự điều phối của Moderator.
>
> The correct answer is: Walkthrough – tác giả dẫn dắt team đi qua từng phần của tài liệu/code để giải thích và thu thập ý kiến

---

#### Question 36

Trước khi triển khai kiến trúc microservices cho hệ thống ngân hàng, công ty mời một nhóm **chuyên gia kỹ thuật** độc lập đánh giá xem **giải pháp thiết kế có khả thi không**, có đáp ứng được yêu cầu về hiệu năng và bảo mật hay không. Đây là loại hình review nào?

**Select one:**

- a. Informal Review, vì chỉ là đánh giá sơ bộ
- b. Walkthrough, vì các chuyên gia đi qua từng phần thiết kế
- c. Kiểm thử đơn vị, vì đánh giá từng thành phần kiến trúc
- d. Technical Review – các chuyên gia kỹ thuật đánh giá xem giải pháp thiết kế có khả thi không ✅ *(Chính xác. Đúng định nghĩa Technical Review trong slide.)*

> Chính xác!
>
> **Technical Review**: các **chuyên gia kỹ thuật** đánh giá xem **giải pháp thiết kế có khả thi không** (về mặt kỹ thuật, hiệu năng, bảo mật...). Khác với Walkthrough (tác giả dẫn dắt để giải thích) và Inspection (quy trình khắt khe nhất, có Moderator điều phối, dựa trên checklist tiêu chuẩn).
>
> The correct answer is: Technical Review – các chuyên gia kỹ thuật đánh giá xem giải pháp thiết kế có khả thi không

---

#### Question 37

Đối với module tính lãi suất tiền gửi – phần cốt lõi và rủi ro cao nhất của hệ thống ngân hàng – công ty tổ chức một buổi review **khắt khe nhất**: có **Moderator điều phối**, reviewer đọc trước tài liệu và rà soát theo **checklist tiêu chuẩn** từng mục. Đây là loại hình review nào?

**Select one:**

- a. Informal Review
- b. Walkthrough
- c. Inspection – quy trình khắt khe nhất, có Moderator điều phối, dựa trên các checklist tiêu chuẩn ✅ *(Chính xác. Đúng định nghĩa Inspection trong slide.)*
- d. Technical Review

> Chính xác!
>
> **Inspection (Thanh tra)** là loại hình review **khắt khe và chính thức nhất** trong 4 loại: có **Moderator điều phối**, reviewer chuẩn bị trước, và việc tìm lỗi dựa trên **checklist tiêu chuẩn**. Nó thường được dành cho các tài liệu/code có rủi ro cao như module tính lãi suất trong tình huống này.
>
> The correct answer is: Inspection – quy trình khắt khe nhất, có Moderator điều phối, dựa trên các checklist tiêu chuẩn

---

#### Question 38

Team cài đặt **SonarQube** vào pipeline để **tự động quét mã nguồn** mỗi khi developer push code, nhằm kiểm tra việc tuân thủ coding standards và phát hiện biến rác, rủi ro bảo mật – mà **không cần chạy chương trình**. Hoạt động này được gọi là gì?

**Select one:**

- a. Static Analysis – dùng phần mềm tự động quét (scan) mã nguồn mà không cần chạy nó ✅ *(Chính xác. Đúng định nghĩa Static Analysis trong slide; SonarQube là công cụ đa ngôn ngữ được liệt kê.)*
- b. Kiểm thử động, vì được chạy tự động trong pipeline
- c. Kiểm thử hộp đen, vì không quan tâm code bên trong
- d. Kiểm thử hồi quy, vì chạy lại sau mỗi lần push code

> Chính xác!
>
> **Static Analysis** là việc **sử dụng phần mềm tự động để quét mã nguồn mà không cần chạy nó**, nhằm đảm bảo code tuân thủ chuẩn mực lập trình, tìm lỗi cú pháp, biến rác, rủi ro bảo mật. Các công cụ phổ biến trong slide: **SonarQube** (đa ngôn ngữ), **ESLint** (JavaScript/TypeScript), **Pylint/Flake8** (Python). Đáp án b sai vì "tự động" không đồng nghĩa "động" – phân biệt static/dynamic dựa trên việc có thực thi code hay không.
>
> The correct answer is: Static Analysis – dùng phần mềm tự động quét (scan) mã nguồn mà không cần chạy nó

---

#### Question 39

Chọn **các** hoạt động thuộc về **kiểm thử tĩnh (Static Testing)**.

**Select one or more:**

- a. Tổ chức buổi review tài liệu yêu cầu để tìm điểm mâu thuẫn ✅ *(Đúng – review tài liệu là kiểm thử tĩnh.)*
- b. Chạy ESLint để quét mã nguồn tìm biến không dùng và unreachable code ✅ *(Đúng – static analysis không thực thi code.)*
- c. Chạy test case đăng nhập trên môi trường Staging để kiểm tra luồng end-to-end
- d. Thực hiện Inspection code theo checklist tiêu chuẩn với Moderator điều phối ✅ *(Đúng – inspection là loại hình review chính thức của kiểm thử tĩnh.)*

> Chính xác!
>
> Kiểm thử tĩnh = **không thực thi mã nguồn**, bao gồm **review** (tài liệu yêu cầu, thiết kế, code) và **static analysis** (quét tự động bằng công cụ). Đáp án c là kiểm thử động (thực thi test case trên phần mềm đang chạy – system testing). Vì vậy chỉ a, b, d là kiểm thử tĩnh.
>
> The correct answers are: Tổ chức buổi review tài liệu yêu cầu để tìm điểm mâu thuẫn, Chạy ESLint để quét mã nguồn tìm biến không dùng và unreachable code, Thực hiện Inspection code theo checklist tiêu chuẩn với Moderator điều phối

---

#### Question 40

Sau khi áp dụng đầy đủ kiểm thử tĩnh (review tài liệu, inspection code, SonarQube quét sạch không còn cảnh báo), trưởng dự án đề xuất **bỏ hẳn kiểm thử động** để tiết kiệm thời gian vì "lỗi đã được tìm hết từ sớm". Đề xuất này có hợp lý không?

**Select one:**

- a. Hợp lý, vì kiểm thử tĩnh đã phát hiện trực tiếp mọi Defect là nguyên nhân gốc rễ
- b. Hợp lý, vì kiểm thử tĩnh rẻ hơn kiểm thử động hàng trăm lần
- c. Hợp lý với điều kiện SonarQube báo 100% sạch
- d. Không hợp lý – kiểm thử tĩnh và kiểm thử động bổ sung cho nhau: tĩnh tìm Defect trực tiếp (nguyên nhân gốc), động phát hiện Failure khi thực thi (hậu quả bộc lộ), và có những lỗi chỉ lộ ra khi chạy như race condition, lỗi tích hợp môi trường thật ✅ *(Chính xác. Hai loại hình bổ sung chứ không thay thế nhau.)*

> Chính xác!
>
> Theo bảng so sánh trong slide: kiểm thử **tĩnh** phát hiện **Defect trực tiếp** (nguyên nhân gốc rễ) mà không cần chạy code; kiểm thử **động** phát hiện **Failure** – hậu quả của Defect **bộc lộ ra ngoài khi thực thi**. Nhiều lỗi chỉ xuất hiện lúc chạy (ví dụ race condition trong sự cố Therac-25, lỗi tương tác môi trường production như CrowdStrike) mà review hay quét tĩnh không thể bắt được. Vì vậy hai loại hình **bổ sung cho nhau**, không thể thay thế.
>
> The correct answer is: Không hợp lý – kiểm thử tĩnh và kiểm thử động bổ sung cho nhau: tĩnh tìm Defect trực tiếp (nguyên nhân gốc), động phát hiện Failure khi thực thi (hậu quả bộc lộ), và có những lỗi chỉ lộ ra khi chạy như race condition, lỗi tích hợp môi trường thật

---


---

### Đáp án Đề 2

#### Question 1

Trường "Số điện thoại" hợp lệ khi gồm đúng 10 chữ số và bắt đầu bằng 0. Tester viết ca kiểm thử: SĐT = "abc123" (không hợp lệ), Email = "khonghop lệ" (không hợp lệ). Hệ thống báo: "Email không hợp lệ". Kết luận đúng của tester là gì?

**Select one:**

- a. Chức năng kiểm tra SĐT hoạt động đúng vì hệ thống đã báo lỗi
- b. Nên gộp thêm trường Họ tên sai vào cùng ca để tiết kiệm số ca kiểm thử
- c. Không thể kết luận gì về việc kiểm tra SĐT vì lỗi email đã che mất lỗi SĐT (hiện tượng masking) ✅ *(Chính xác. Mỗi ca chỉ được chứa một giá trị không hợp lệ.)*
- d. SĐT "abc123" là hợp lệ vì có 6 ký tự

> Chính xác!
>
> Hệ thống thường dừng ở lỗi đầu tiên nó kiểm tra được, nên khi một ca chứa hai giá trị không hợp lệ, lỗi thứ hai có thể bị che hoàn toàn (masking). Quy tắc EP: có thể gộp nhiều vùng hợp lệ vào một ca, nhưng mỗi ca chỉ chứa một giá trị không hợp lệ. Ca đúng phải tách riêng: (SĐT sai, Email đúng) và (SĐT đúng, Email sai).
>
> The correct answer is: Không thể kết luận gì về việc kiểm tra SĐT vì lỗi email đã che mất lỗi SĐT (hiện tượng masking)

---

#### Question 2

Quy định: đơn hàng TRÊN 500.000đ được miễn phí vận chuyển (bước nhảy 1.000đ; riêng 500.000đ không được miễn). Áp dụng BVA 2 giá trị cho biên 500.000đ, cặp giá trị kiểm thử ĐÚNG là?

**Select one:**

- a. 499.000đ và 500.000đ
- b. 500.000đ và 501.000đ ✅ *(Chính xác. 500.000đ không thuộc vùng miễn phí; giá trị liền kề phía trong vùng là 501.000đ.)*
- c. 499.000đ và 501.000đ
- d. 501.000đ và 502.000đ

> Chính xác!
>
> "Trên 500.000đ" là khoảng mở — 500.000đ thuộc vùng KHÔNG được miễn. BVA 2 giá trị: tại mỗi biên lấy giá trị trên biên và giá trị liền kề thuộc phân vùng bên cạnh → 500.000đ (ngoài vùng) và 501.000đ (trong vùng). Bẫy đề thi kinh điển: nhầm 500.000đ là được miễn phí.
>
> The correct answer is: 500.000đ và 501.000đ

---

#### Question 3

Với yêu cầu 18 ≤ Tuổi ≤ 60 (Tuổi là số nguyên), áp dụng BVA theo phương pháp **3 giá trị** (ISTQB), tập giá trị kiểm thử ĐÚNG là?

**Select one:**

- a. 17, 18, 60, 61
- b. 18, 19, 59, 60
- c. 17, 18, 19, 59, 60, 61 ✅ *(Chính xác. Mỗi biên lấy thêm cả hai giá trị lân cận.)*
- d. 16, 17, 18, 60, 61, 62

> Chính xác!
>
> BVA 3 giá trị: tại mỗi biên chọn giá trị trên biên cộng cả hai giá trị liền kề (một phía trong vùng, một phía ngoài vùng) → biên dưới: 17, 18, 19; biên trên: 59, 60, 61. Đáp án a là BVA 2 giá trị; đáp án d lấy giá trị cách biên tới 2 đơn vị nên sai.
>
> The correct answer is: 17, 18, 19, 59, 60, 61

---

#### Question 4

Đoạn code kiểm tra điều kiện cấp bằng lái (yêu cầu đúng: 18 ≤ Tuổi ≤ 60):

```
if (age > 18 && age <= 60) return "Allowed"; else return "Denied";
```

Tester A dùng EP với giá trị 30, tester B dùng BVA với giá trị 18. Phát biểu ĐÚNG là?

**Select one:**

- a. Cả hai đều phát hiện được bug
- b. Chỉ tester A phát hiện được bug vì 30 nằm giữa vùng hợp lệ
- c. Không ai phát hiện được vì code không có lỗi biên
- d. Chỉ tester B phát hiện được bug vì 18 bị từ chối sai, trong khi 30 vẫn cho kết quả đúng nên bug bị lọt ✅ *(Chính xác. Đây chính là "điểm mù" của developer ở ranh giới mà BVA nhắm tới.)*

> Chính xác!
>
> Developer gõ nhầm `>` thay vì `>=` — lỗi biên điển hình. Với 30, cả yêu cầu và code đều cho "Allowed" nên bug lọt (điểm mù của EP khi chỉ lấy giá trị giữa vùng). Với 18, yêu cầu mong đợi "Allowed" nhưng code trả "Denied" → lộ bug. Đây chính là lý do BVA ra đời: đánh vào điểm mù của developer ở các điểm ranh giới.
>
> The correct answer is: Chỉ tester B phát hiện được bug vì 18 bị từ chối sai, trong khi 30 vẫn cho kết quả đúng nên bug bị lọt

---

#### Question 5

Đặc tả rút tiền ví điện tử: số tiền rút mỗi lần là số nguyên, tối thiểu 50.000đ, tối đa 20.000.000đ và phải là bội số của 10.000đ. Muốn kiểm tra RIÊNG quy tắc "tối thiểu" (không vi phạm đồng thời quy tắc bội số), nên chọn giá trị nào?

**Select one:**

- a. 49.999đ
- b. 125.000đ
- c. 20.010.000đ
- d. 40.000đ ✅ *(Chính xác. 40.000 < 50.000 nhưng vẫn là bội số của 10.000 → chỉ vi phạm một quy tắc.)*

> Chính xác!
>
> 49.999 vừa nhỏ hơn tối thiểu vừa không chia hết cho 10.000 — nếu hệ thống báo lỗi, ta không biết quy tắc nào đã hoạt động (vi phạm kép). 40.000 nhỏ hơn 50.000 nhưng vẫn chia hết cho 10.000 nên tách riêng được quy tắc "tối thiểu". Bài học: khi một trường có nhiều quy tắc, chọn thêm giá trị sao cho mỗi ca chỉ vi phạm một quy tắc.
>
> The correct answer is: 40.000đ

---

#### Question 6

Hệ thống xét học bổng theo ĐTB (thang 4, 2 chữ số thập phân): dưới 2.50 → Không đạt; từ 2.50 đến dưới 3.20 → Khá; từ 3.20 đến dưới 3.60 → Giỏi; từ 3.60 đến 4.00 → Xuất sắc; ngoài [0.00; 4.00] hoặc không phải số → Báo lỗi. Áp dụng EP cho đầu RA, cần tối thiểu bao nhiêu Test Case để bao phủ mọi phân vùng đầu ra?

**Select one:**

- a. 4
- b. 6
- c. 5 ✅ *(Chính xác. 4 mức học bổng + 1 vùng báo lỗi = 5 phân vùng đầu ra.)*
- d. 3

> Chính xác!
>
> EP áp dụng được cho cả đầu ra: mỗi nhóm đầu ra mà hệ thống xử lý giống nhau là một vùng — Không đạt, Khá, Giỏi, Xuất sắc và Báo lỗi là 5 vùng khác nhau, mỗi vùng cần ít nhất một ca đại diện. Đáp án a quên mất vùng báo lỗi cũng là một phân vùng phải kiểm tra.
>
> The correct answer is: 5

---

#### Question 7

Quy định chiết khấu: khách hàng được giảm 10% nếu thỏa các điều kiện: (C1) là thành viên Vàng, (C2) có mã giảm giá, (C3) đơn hàng trên 1.000.000đ. Bảng quyết định ĐẦY ĐỦ (chưa rút gọn) có bao nhiêu cột quy tắc?

**Select one:**

- a. 6
- b. 3
- c. 8 ✅ *(Chính xác. 3 điều kiện nhị phân → 2³ = 8 tổ hợp.)*
- d. 9

> Chính xác!
>
> Mỗi điều kiện Đúng/Sai có 2 giá trị; số cột quy tắc của bảng đầy đủ = tích số giá trị của các điều kiện = 2 × 2 × 2 = 8. Đáp án a (6) là trường hợp điều kiện nhiều giá trị (3 × 2), không phải trường hợp này.
>
> The correct answer is: 8

---

#### Question 8

Tính ưu đãi theo: C1 — Hạng thành viên: Thường / Bạc / Vàng (3 giá trị); C2 — Có nhập mã giảm giá: Có / Không (2 giá trị). Bảng quyết định đầy đủ có bao nhiêu cột quy tắc?

**Select one:**

- a. 5
- b. 6 ✅ *(Chính xác. Điều kiện nhiều giá trị (extended entry): 3 × 2 = 6.)*
- c. 8
- d. 9

> Chính xác!
>
> Không phải điều kiện nào cũng chỉ có Đúng/Sai. Với điều kiện nhiều giá trị (extended entry), số cột quy tắc = tích số giá trị của từng điều kiện = 3 × 2 = 6. Ngoài ra, các ô còn bỏ trống trong bảng (ví dụ "Thường + có mã giảm giá → ?") chính là nơi phát hiện đặc tả mơ hồ: mã giảm giá có được cộng dồn với ưu đãi hạng thành viên không?
>
> The correct answer is: 6

---

#### Question 9

Bảng quyết định tính phí ship: C1: Khách hàng VIP? — C2: Đơn hàng > 500k? Quy tắc nghiệp vụ: hễ là VIP thì luôn được Free Ship bất kể giá trị đơn hàng. Khi rút gọn bảng bằng ký hiệu "–" (don't-care) ở ô C2 của quy tắc VIP, kết quả ĐÚNG là?

**Select one:**

- a. Số cột quy tắc tăng từ 4 lên 5
- b. Ký hiệu "–" nghĩa là điều kiện đó bị xóa khỏi đặc tả
- c. Không thể rút gọn vì sẽ làm mất một tổ hợp điều kiện
- d. Hai quy tắc (VIP + đơn > 500k) và (VIP + đơn ≤ 500k) gộp thành một, bảng còn 3 cột mà vẫn bao phủ đầy đủ logic ✅ *(Chính xác.)*

> Chính xác!
>
> "–" nghĩa là "không quan tâm": khi C1 = VIP thì kết quả luôn là Free Ship, C2 không làm thay đổi đầu ra nên hai cột gộp lại được. Lợi ích: giảm số Test Case mà không bỏ sót logic. Lưu ý rủi ro: rút gọn dựa trên giả định điều kiện "–" thật sự không ảnh hưởng; với chức năng rủi ro cao (thanh toán, phân quyền), nên giữ bảng đầy đủ.
>
> The correct answer is: Hai quy tắc (VIP + đơn > 500k) và (VIP + đơn ≤ 500k) gộp thành một, bảng còn 3 cột mà vẫn bao phủ đầy đủ logic

---

#### Question 10

Trang thanh toán có 3 tham số, mỗi tham số 3 lựa chọn (trình duyệt × hệ điều hành × phương thức thanh toán) → 27 tổ hợp đầy đủ. Team quyết định chỉ cần đảm bảo mọi CẶP giá trị (của 2 tham số bất kỳ) xuất hiện ít nhất một lần trong bộ test. Đây là kỹ thuật gì và vì sao hợp lý?

**Select one:**

- a. Phân vùng tương đương — vì mỗi tham số là một phân vùng
- b. Bảng quyết định — vì có nhiều điều kiện kết hợp
- c. Kiểm thử tổ hợp cặp đôi (Pairwise) — vì phần lớn lỗi phát sinh từ tương tác của chỉ hai tham số ✅ *(Chính xác.)*
- d. Đoán lỗi — vì dựa vào kinh nghiệm của tester

> Chính xác!
>
> Nghiên cứu cho thấy phần lớn lỗi phần mềm phát sinh từ tương tác của chỉ hai tham số, chứ không phải tổ hợp của nhiều tham số cùng lúc. Pairwise giảm 27 tổ hợp xuống còn khoảng 9 Test Case mà vẫn phủ hết các cặp — cân bằng giữa độ bao phủ và chi phí: tốt hơn "đoán mò", rẻ hơn test toàn bộ. Công cụ hỗ trợ: PICT (Microsoft), ACTS (NIST).
>
> The correct answer is: Kiểm thử tổ hợp cặp đôi (Pairwise) — vì phần lớn lỗi phát sinh từ tương tác của chỉ hai tham số

---

#### Question 11

Vòng đời đơn hàng: Nháp → (sự kiện Nộp) → Chờ duyệt → (sự kiện Duyệt) → Đã duyệt. Sự kiện "Duyệt" chỉ hợp lệ khi đơn đang ở trạng thái Chờ duyệt. Tester thử bấm "Duyệt" khi đơn còn ở trạng thái Nháp. Kết quả mong đợi ĐÚNG là?

**Select one:**

- a. Đơn chuyển sang Đã duyệt vì sự kiện sẽ hợp lệ ở bước sau
- b. Đơn tự động chuyển sang Chờ duyệt rồi Đã duyệt
- c. Hệ thống crash là chấp nhận được vì đây là ca bất thường
- d. Hệ thống từ chối sự kiện, trạng thái đơn giữ nguyên ở Nháp và hiển thị thông báo phù hợp ✅ *(Chính xác.)*

> Chính xác!
>
> Đây là kiểm thử chuyển KHÔNG hợp lệ (mức bao phủ cao nhất của state transition). Kết quả mong đợi của một chuyển không hợp lệ: hệ thống từ chối sự kiện, trạng thái giữ nguyên, hiển thị thông báo phù hợp — và phải kiểm tra cả trạng thái sau khi thử, không chỉ nhìn thông báo. Lỗi thường gặp: ca kiểm thử chỉ ghi "báo lỗi" mà không kiểm tra trạng thái có giữ nguyên không.
>
> The correct answer is: Hệ thống từ chối sự kiện, trạng thái đơn giữ nguyên ở Nháp và hiển thị thông báo phù hợp

---

#### Question 12

Tài khoản bắt đầu ở S1 (Chờ nhập PIN). Quy tắc: nhập sai 3 lần thì chuyển sang S2 (Bị khóa); nhập đúng PIN khi ở S1 thì chuyển sang S3 (Đăng nhập thành công). Người dùng thực hiện chuỗi sự kiện: **Sai → Sai → Sai → Đúng**. Trạng thái cuối cùng mong đợi là?

**Select one:**

- a. S3: Đăng nhập thành công
- b. S1: Chờ nhập PIN
- c. S2: Bị khóa ✅ *(Chính xác. Sau lần sai thứ 3 tài khoản đã bị khóa; lần nhập đúng sau đó không còn tác dụng.)*
- d. Trạng thái không xác định

> Chính xác!
>
> S1 --sai lần 1--> S1; --sai lần 2--> S1; --sai lần 3--> S2 (Khóa). Khi đã ở S2, sự kiện "nhập đúng PIN" không còn chuyển hợp lệ nào (trừ khi có quy trình mở khóa riêng) nên tài khoản vẫn bị khóa. Kỹ thuật chuyển trạng thái giúp phát hiện lỗi khi hệ thống cho phép đăng nhập sau khi đã khóa — một lỗi bảo mật nghiêm trọng.
>
> The correct answer is: S2: Bị khóa

---

#### Question 13

Ba mức bao phủ của kiểm thử chuyển trạng thái là: (1) mọi trạng thái được đi qua, (2) mọi chuyển đổi hợp lệ được thực thi, (3) mọi chuyển đổi kể cả không hợp lệ được thử. Mức (2) còn được gọi là gì?

**Select one:**

- a. Bao phủ mọi trạng thái
- b. Bao phủ mọi chuyển không hợp lệ
- c. Bao phủ 0-switch ✅ *(Chính xác. 0-switch = mọi chuyển hợp lệ được thực thi ít nhất một lần.)*
- d. Bao phủ quyết định

> Chính xác!
>
> 0-switch coverage yêu cầu mọi chuyển đổi hợp lệ trong sơ đồ đều được thực thi ít nhất một lần. Lỗi thường gặp khi làm bài: nhầm "bao phủ mọi trạng thái" với "bao phủ mọi chuyển" — đi qua hết các trạng thái chưa chắc đã thực thi hết các chuyển (ví dụ vòng lặp tự chuyển tại cùng một trạng thái).
>
> The correct answer is: Bao phủ 0-switch

---

#### Question 14

Cho hàm:

```
function calculateDiscount(amount) {
  let discount = 0;          // Lệnh 1
  if (amount > 1000) {       // Lệnh 2 (quyết định True/False)
    discount = 10;           // Lệnh 3
  }
  return discount;           // Lệnh 4
}
```

Chạy MỘT Test Case duy nhất với amount = 500. Độ bao phủ lệnh (Statement) và bao phủ quyết định (Decision) lần lượt là?

**Select one:**

- a. 100% và 100%
- b. 75% và 50% ✅ *(Chính xác. Chạy qua Lệnh 1, 2, 4 (3/4); quyết định mới đi nhánh False (1/2).)*
- c. 75% và 100%
- d. 50% và 50%

> Chính xác!
>
> amount = 500 → điều kiện False → code chạy Lệnh 1 → Lệnh 2 (nhánh False) → Lệnh 4, bỏ qua Lệnh 3 → Statement = 3/4 = 75%. Quyết định có 2 kết quả True/False, mới thực thi nhánh False → Decision = 1/2 = 50%. Muốn Decision 100% phải thêm ca amount > 1000 để đi nhánh True.
>
> The correct answer is: 75% và 50%

---

#### Question 15

Phát biểu ĐÚNG về mối quan hệ giữa bao phủ quyết định (Decision/Branch Coverage) và bao phủ lệnh (Statement Coverage) là?

**Select one:**

- a. Đạt 100% Statement thì tự động đạt 100% Decision
- b. Hai độ đo này độc lập, không liên quan nhau
- c. Statement là tiêu chí mạnh hơn Decision
- d. Đạt 100% Decision thì tự động đảm bảo 100% Statement, nhưng ngược lại thì không ✅ *(Chính xác. Đây là "quy tắc vàng".)*

> Chính xác!
>
> Đi hết mọi kết quả True/False của mọi quyết định thì mọi dòng lệnh đều đã được chạy qua → Decision 100% kéo theo Statement 100%. Ngược lại, Statement 100% vẫn có thể bỏ sót một nhánh (ví dụ TC amount = 2000 đạt Statement 100% nhưng Decision chỉ 50% vì chưa đi nhánh False). Vì vậy Statement là tiêu chí yếu nhất trong các kỹ thuật hộp trắng.
>
> The correct answer is: Đạt 100% Decision thì tự động đảm bảo 100% Statement, nhưng ngược lại thì không

---

#### Question 16

Chọn **BA** ví dụ thuộc kỹ thuật Đoán lỗi (Error Guessing).

**Select one or more:**

- a. Nhập `<script>alert(1)</script>` vào ô tìm kiếm để kiểm tra XSS ✅ *(Đúng – lỗi bảo mật kinh điển đúc rút từ kinh nghiệm.)*
- b. Thử chia hóa đơn cho số lượng bằng 0 ✅ *(Đúng – lỗi chia cho 0.)*
- c. Bỏ trống trường bắt buộc rồi bấm Lưu ✅ *(Đúng – lỗi bỏ trống field bắt buộc.)*
- d. Đo statement coverage của module bằng công cụ
- e. Vẽ bảng quyết định cho logic tính chiết khấu

> Chính xác!
>
> Error Guessing dựa vào trực giác, kỹ năng và kinh nghiệm thực chiến của tester để liệt kê các lỗi có khả năng xảy ra cao (dựa trên lịch sử dự án): chia cho 0, bỏ trống field bắt buộc, nhập mã độc XSS/SQLi vào ô tìm kiếm. Đáp án d thuộc kỹ thuật hộp trắng, đáp án e thuộc bảng quyết định — đều là kỹ thuật có hệ thống, không phải đoán lỗi.
>
> The correct answers are: Nhập `<script>alert(1)</script>` vào ô tìm kiếm để kiểm tra XSS, Thử chia hóa đơn cho số lượng bằng 0, Bỏ trống trường bắt buộc rồi bấm Lưu

---

#### Question 17

Bug: chữ "Khuyến mãi" trên banner trang chủ bị gõ sai thành "Khuyến mải". Lỗi không ảnh hưởng chức năng, nhưng đối tác lớn sẽ demo hệ thống cho khách hàng vào ngày mai. Phân loại ĐÚNG là?

**Select one:**

- a. Severity High, Priority High
- b. Severity High, Priority Low
- c. Severity Low, Priority High ✅ *(Chính xác. Lỗi chính tả = nghiêm trọng thấp về kỹ thuật, nhưng cần sửa ngay vì lý do kinh doanh.)*
- d. Severity Low, Priority Low

> Chính xác!
>
> Severity (góc nhìn kỹ thuật): lỗi làm hỏng hệ thống đến mức nào — lỗi chính tả là Minor/Low. Priority (góc nhìn kinh doanh): lỗi có cần sửa ngay không — demo với khách hàng ngày mai nên là High. Đây là ví dụ kinh điển "Severity Low nhưng Priority High"; trường hợp ngược lại (ví dụ crash ở chức năng ít ai dùng: Severity High nhưng Priority Low) cũng tồn tại.
>
> The correct answer is: Severity Low, Priority High

---

#### Question 18

Một bug đang ở trạng thái Fixed. Tester retest và thấy lỗi VẪN còn tồn tại. Theo vòng đời defect, tester sẽ chuyển bug sang trạng thái nào?

**Select one:**

- a. New
- b. Assigned
- c. Reopened ✅ *(Chính xác. Retest Fail → Reopened, bug được gán lại cho dev sửa tiếp.)*
- d. Closed

> Chính xác!
>
> Vòng đời defect: New → Assigned → (dev sửa) → Fixed → Retest. Retest Pass → Closed; Retest Fail → Reopened (quay lại cho dev). Đáp án a (New) chỉ dùng cho bug mới phát hiện; đáp án d (Closed) chỉ khi retest pass và đạt tiêu chí đóng. Quản lý vòng đời này thường thực hiện qua Jira, Bugzilla, Redmine.
>
> The correct answer is: Reopened

---

#### Question 19

Chọn **HAI** điều kiện thuộc Tiêu chí BẮT ĐẦU kiểm thử (Entry Criteria).

**Select one or more:**

- a. Môi trường kiểm thử đã được setup xong ✅ *(Đúng – entry: khi nào được phép bắt đầu test.)*
- b. Dev đã chạy xong Unit Test ✅ *(Đúng – entry.)*
- c. Đã thực thi 100% Test Case
- d. Số bug Critical chưa sửa bằng 0

> Chính xác!
>
> Entry Criteria trả lời "khi nào được phép bắt đầu test": môi trường test đã setup xong, dev đã chạy xong unit test, tài liệu yêu cầu đã được chốt. Đáp án c và d thuộc Exit Criteria — "khi nào được phép dừng test": đã chạy 100% test case, số bug nghiêm trọng chưa sửa bằng 0, đạt đủ độ phủ code yêu cầu.
>
> The correct answers are: Môi trường kiểm thử đã được setup xong, Dev đã chạy xong Unit Test

---

#### Question 20

Điều nào sau đây là Tiêu chí KẾT THÚC kiểm thử (Exit Criteria) hợp lệ?

**Select one:**

- a. Dev vừa commit code mới lên nhánh test
- b. Số bug Critical/Blocker chưa sửa bằng 0 và đạt độ bao phủ yêu cầu ✅ *(Chính xác.)*
- c. Tester đã viết xong Test Plan
- d. Môi trường test vừa được setup xong

> Chính xác!
>
> Exit Criteria trả lời "khi nào được phép dừng test": đã chạy 100% Test Case, số bug nghiêm trọng (Critical) chưa sửa bằng 0, đạt đủ độ phủ code (coverage) yêu cầu. Đáp án a là tín hiệu bắt đầu một vòng test mới; đáp án c và d thuộc giai đoạn chuẩn bị / tiêu chí bắt đầu.
>
> The correct answer is: Số bug Critical/Blocker chưa sửa bằng 0 và đạt độ bao phủ yêu cầu

---

#### Question 21

Trong Test Plan, mục nào trả lời câu hỏi "tính năng nào sẽ KHÔNG được kiểm thử"?

**Select one:**

- a. Tiến độ (Schedule) — các mốc thời gian
- b. Nhân lực & Môi trường — số tester và cấu hình server
- c. Tiêu chí bắt đầu & kết thúc (Entry/Exit Criteria)
- d. Phạm vi (Scope) ✅ *(Chính xác. Scope xác định rõ tính năng nào cần test và — quan trọng hơn — tính năng nào KHÔNG cần test.)*

> Chính xác!
>
> Test Plan trả lời: Cái gì? Ai làm? Khi nào? Bằng cách nào? Trong đó Scope là mục then chốt để tránh hiểu lầm: ghi rõ cái gì nằm trong và — quan trọng hơn — cái gì nằm ngoài phạm vi kiểm thử. Đáp án c trả lời "khi nào được bắt đầu/dừng", không phải "test cái gì".
>
> The correct answer is: Phạm vi (Scope)

---

#### Question 22

Test Lead muốn trả lời câu hỏi: "Mọi yêu cầu của khách hàng đã có ít nhất một Test Case kiểm tra chưa?" Công cụ phù hợp nhất là?

**Select one:**

- a. Bảng quyết định (Decision Table)
- b. Báo cáo defect hàng ngày
- c. Ma trận truy vết yêu cầu (RTM) ✅ *(Chính xác. RTM ánh xạ mỗi yêu cầu với các Test Case kiểm tra nó.)*
- d. Test Plan

> Chính xác!
>
> RTM là bảng ánh xạ liên kết mỗi Requirement với các Test Case kiểm tra nó, trả lời hai câu hỏi sống còn: (1) Độ bao phủ — mọi yêu cầu đã có ít nhất một Test Case chưa (tránh bỏ sót); (2) Truy vết ngược — Test Case này đang kiểm tra cho yêu cầu nào (tránh test thừa). Test Plan mô tả kế hoạch chung chứ không ánh xạ chi tiết yêu cầu – test case.
>
> The correct answer is: Ma trận truy vết yêu cầu (RTM)

---

#### Question 23

Hai rủi ro được đánh giá: R1 — xác suất xảy ra 0.9, mức độ ảnh hưởng 2/10; R2 — xác suất xảy ra 0.3, mức độ ảnh hưởng 8/10. Theo công thức Mức độ rủi ro = Xác suất × Mức độ ảnh hưởng, rủi ro nào cần ưu tiên kiểm thử trước?

**Select one:**

- a. R1 vì xác suất xảy ra cao hơn
- b. R2 vì 0.3 × 8 = 2.4 > 0.9 × 2 = 1.8 ✅ *(Chính xác.)*
- c. Cả hai có mức độ rủi ro ngang nhau
- d. Không thể so sánh vì khác thang đo

> Chính xác!
>
> Mức độ rủi ro R1 = 0.9 × 2 = 1.8; R2 = 0.3 × 8 = 2.4. Kiểm thử dựa trên rủi ro (Risk-Based Testing) dùng mức độ rủi ro để quyết định tính năng nào test trước, test kỹ hơn — nên ưu tiên R2 dù xác suất của nó thấp hơn. Bẫy: chỉ nhìn xác suất mà bỏ qua mức độ ảnh hưởng.
>
> The correct answer is: R2 vì 0.3 × 8 = 2.4 > 0.9 × 2 = 1.8

---

#### Question 24

Nguồn lực kiểm thử có hạn, không thể test kỹ mọi tính năng. Theo Kiểm thử dựa trên rủi ro (Risk-Based Testing), tester nên làm gì?

**Select one:**

- a. Test các tính năng dễ nhất trước để nhanh đạt số lượng test case
- b. Chỉ test các tính năng mà dev tự tin nhất
- c. Ưu tiên test trước và test kỹ hơn các tính năng có mức độ rủi ro cao ✅ *(Chính xác.)*
- d. Chia đều thời gian cho mọi tính năng

> Chính xác!
>
> Risk-Based Testing dùng mức độ rủi ro (xác suất × ảnh hưởng) để phân bổ nỗ lực: tính năng rủi ro cao (ví dụ tính tiền, bảo mật, hiệu năng) được test trước và kỹ hơn; tính năng rủi ro thấp test sau hoặc test ít hơn. Đây là cách tối ưu nguồn lực thay vì dàn đều — cũng là lý do BVA 3 giá trị được "dùng khi rủi ro cao".
>
> The correct answer is: Ưu tiên test trước và test kỹ hơn các tính năng có mức độ rủi ro cao

---

#### Question 25

Team dùng Planning Poker: cả team úp thẻ bài theo dãy số Fibonacci để ẩn danh đánh giá độ khó của task kiểm thử. Đây là kỹ thuật ước lượng nào?

**Select one:**

- a. Dựa trên số liệu (Metrics-based)
- b. Dựa trên chuyên gia (Expert-based) ✅ *(Chính xác. Planning Poker là kỹ thuật nhóm thuộc expert-based, rất phổ biến trong Agile.)*
- c. Dựa trên rủi ro (Risk-based)
- d. Phân tích giá trị biên (BVA)

> Chính xác!
>
> Hai kỹ thuật ước lượng kiểm thử: (1) Metrics-based — dùng dữ liệu dự án cũ có quy mô tương đương (ví dụ lần trước viết 100 test case tốn 2 ngày → tính năng mới cần 500 test case sẽ mất khoảng 10 ngày); (2) Expert-based — tham khảo ý kiến người có kinh nghiệm thực làm, trong đó Planning Poker dùng thẻ Fibonacci đánh giá ẩn danh để tránh thiên vị. Đáp án c là kỹ thuật ưu tiên kiểm thử, không phải ước lượng nỗ lực.
>
> The correct answer is: Dựa trên chuyên gia (Expert-based)

---

#### Question 26

Để tránh thiên vị xác nhận (confirmation bias) khi tìm lỗi, mức độ độc lập trong kiểm thử nào là KHÁCH QUAN NHẤT?

**Select one:**

- a. Dev tự test code của mình
- b. Dev test chéo cho nhau trong cùng một team
- c. Team test độc lập trong nội bộ công ty
- d. Tổ chức kiểm thử độc lập thuê từ bên ngoài ✅ *(Chính xác. Mức độ 4 — khách quan nhất, bắt buộc cho các hệ thống y tế, hàng không, tài chính cốt lõi.)*

> Chính xác!
>
> Bốn mức độ độc lập tăng dần: (1) Dev tự test code của mình — thiếu khách quan nhất; (2) Dev test chéo trong cùng team; (3) Team test độc lập nội bộ — phổ biến nhất; (4) Tổ chức kiểm thử độc lập bên ngoài — khách quan nhất. Mức độ độc lập càng cao càng tốn kém, nên lựa chọn phù hợp với mức độ rủi ro của hệ thống.
>
> The correct answer is: Tổ chức kiểm thử độc lập thuê từ bên ngoài

---

#### Question 27

Chọn **HAI** trường hợp NÊN tự động hóa kiểm thử.

**Select one or more:**

- a. Bộ Test Case hồi quy chạy lại sau mỗi lần commit ✅ *(Đúng – lặp đi lặp lại nhiều lần.)*
- b. Kiểm thử tải (Load test) với 5.000 người dùng ảo ✅ *(Đúng – con người không thể mô phỏng.)*
- c. Test Case chỉ chạy đúng một lần
- d. Kiểm thử thăm dò (Exploratory) tính năng mới

> Chính xác!
>
> Nên tự động hóa: test case hồi quy (chạy lại nhiều lần), các luồng nghiệp vụ cốt lõi (happy path), kiểm thử hiệu năng/tải, setup dữ liệu test hàng loạt. Không nên: TC chỉ chạy 1 lần (chi phí viết script không được bù đắp), hệ thống đang thay đổi UI/UX liên tục, kiểm thử Usability (cần đánh giá của con người), kiểm thử thăm dò. Automation không thay thế hoàn toàn Manual Testing.
>
> The correct answers are: Bộ Test Case hồi quy chạy lại sau mỗi lần commit, Kiểm thử tải (Load test) với 5.000 người dùng ảo

---

#### Question 28

Theo Tháp kiểm thử tự động (Mike Cohn) với tỷ lệ Unit 70% – API/Service 20% – UI 10%, phát biểu ĐÚNG là?

**Select one:**

- a. Nên viết càng nhiều UI test càng tốt vì gần với người dùng nhất
- b. Unit test ở đáy tháp: viết càng nhiều càng tốt, chạy mất vài mili-giây, tìm lỗi ngay ở mức hàm/class; UI test ở đỉnh tháp: viết ít nhất, chỉ cho các luồng người dùng quan trọng nhất ✅ *(Chính xác.)*
- c. API test chậm và tốn công bảo trì nhất nên viết ít nhất
- d. Cả ba tầng nên viết số lượng bằng nhau

> Chính xác!
>
> Triết lý tháp kiểm thử: đáy (Unit) rẻ – nhanh – ổn định nên đầu tư nhiều; giữa (API/Service) chạy nhanh, ổn định hơn UI vì không phụ thuộc giao diện; đỉnh (UI/E2E) chạy chậm, dễ gãy (brittle), tốn công bảo trì nên viết ít nhất có thể. Sai lầm kinh điển của các team mới: "Automation = tự động click trên giao diện Web" — tức là xây tháp ngược.
>
> The correct answer is: Unit test ở đáy tháp: viết càng nhiều càng tốt, chạy mất vài mili-giây, tìm lỗi ngay ở mức hàm/class; UI test ở đỉnh tháp: viết ít nhất, chỉ cho các luồng người dùng quan trọng nhất

---

#### Question 29

Một Test Case automation lúc chạy Pass, lúc chạy Fail dù code và môi trường không đổi. Nguyên nhân CHÍNH thường gặp nhất là?

**Select one:**

- a. Tester viết sai expected result
- b. Server bị hacker tấn công
- c. Code automation chạy nhanh hơn tốc độ tải của trang web — đoạn code cố click vào một nút chưa kịp hiện ra trên màn hình ✅ *(Chính xác. Đây là Flaky Test.)*
- d. Dùng trình duyệt phiên bản quá mới

> Chính xác!
>
> Flaky Test là test case lúc chạy Pass, lúc chạy Fail một cách không ổn định. Nguyên nhân chính: tốc độ thực thi của script nhanh hơn tốc độ render/tải trang, dẫn đến thao tác lên phần tử chưa sẵn sàng. Giải pháp: cơ chế chờ đợi thông minh — Auto-wait của Playwright (tự chờ phần tử ở trạng thái sẵn sàng) khắc phục khoảng 90% vấn đề; tuyệt đối không dùng hard sleep.
>
> The correct answer is: Code automation chạy nhanh hơn tốc độ tải của trang web — đoạn code cố click vào một nút chưa kịp hiện ra trên màn hình

---

#### Question 30

Vì sao "tuyệt đối không dùng hard sleep" như `await page.waitForTimeout(5000)` trong automation?

**Select one:**

- a. Vì lệnh này bị Playwright cấm hoàn toàn, code sẽ báo lỗi biên dịch
- b. Vì nó làm tăng flaky test
- c. Vì nó chỉ chạy được trên Chrome, không chạy được trên Firefox
- d. Vì nó bắt code dừng cứng 5 giây: nếu web tải xong trong 1 giây thì lãng phí 4 giây, khiến cả bộ test chậm chạp ✅ *(Chính xác.)*

> Chính xác!
>
> Hard sleep dừng cứng bất kể trang đã sẵn sàng hay chưa → lãng phí thời gian chờ thừa, bộ test phình to và chậm chạp. Thay vào đó dùng Auto-wait (Playwright tự động chờ phần tử ở trạng thái sẵn sàng: hiển thị, có thể click, ngừng chuyển động) hoặc Explicit Wait chờ một điều kiện cụ thể — ví dụ `await page.waitForResponse(...)` chờ API trả về xong rồi mới click nút tiếp theo.
>
> The correct answer is: Vì nó bắt code dừng cứng 5 giây: nếu web tải xong trong 1 giây thì lãng phí 4 giây, khiến cả bộ test chậm chạp

---

#### Question 31

Team áp dụng Page Object Model (POM): file `LoginPage.js` chứa locators và các hàm thao tác, file `login.spec.js` chứa kịch bản kiểm thử. Khi dev đổi id của nút Đăng nhập, điều gì xảy ra?

**Select one:**

- a. Phải sửa lại toàn bộ các file test liên quan đến đăng nhập
- b. Phải viết lại toàn bộ framework automation
- c. Chỉ cần sửa một nơi duy nhất trong LoginPage.js (Page Class), hàng trăm file Test Case không bị ảnh hưởng ✅ *(Chính xác. Đây là "lợi ích thần kỳ" của POM.)*
- d. Không cần sửa gì vì POM tự động cập nhật locator

> Chính xác!
>
> POM là design pattern chia dự án automation thành 2 lớp riêng biệt: (1) Page Classes — thông tin giao diện (locators) và hàm thao tác trên một trang duy nhất; (2) Test Classes — logic kiểm thử (assertions), gọi các hàm từ Page Class. Khi trang web đổi giao diện, chỉ cần sửa code ở một nơi duy nhất (Page Class). Đáp án d sai: POM không tự cập nhật, vẫn phải sửa tay — nhưng chỉ một nơi.
>
> The correct answer is: Chỉ cần sửa một nơi duy nhất trong LoginPage.js (Page Class), hàng trăm file Test Case không bị ảnh hưởng

---

#### Question 32

Giao diện web đã chặn không cho nhập số tiền âm, nhưng hacker gọi thẳng API với `amount = -1000000` và hệ thống chấp nhận, gây thất thoát tiền. Tình huống này chứng minh điều gì về API Testing?

**Select one:**

- a. UI testing là đủ, không cần API testing
- b. Nên tắt API đi để hacker không gọi được
- c. API testing bảo vệ lớp bảo mật cốt lõi: kiểm tra ở UI có thể bị bypass hoàn toàn nếu API không tự chặn ✅ *(Chính xác.)*
- d. Lỗi này thuộc về tester manual, không liên quan automation

> Chính xác!
>
> Ba giá trị vượt trội của API testing so với UI testing: (1) Test rất sớm — không cần đợi đội front-end thiết kế xong giao diện; (2) Tốc độ chớp nhoáng — một request chỉ mất vài chục mili-giây, chạy 1000 test case API nhanh gấp hàng trăm lần qua UI; (3) Bảo mật cốt lõi — UI chỉ là lớp vỏ, hacker luôn có thể gọi thẳng vào API. Vì vậy API testing nằm ở giữa tháp kiểm thử và được đầu tư nhiều hơn UI.
>
> The correct answer is: API testing bảo vệ lớp bảo mật cốt lõi: kiểm tra ở UI có thể bị bypass hoàn toàn nếu API không tự chặn

---

#### Question 33

Chọn **TẤT CẢ** các cặp tình huống – mã trạng thái HTTP ĐÚNG trong kiểm thử API.

**Select one or more:**

- a. POST /users tạo tài khoản thành công → 201 Created ✅ *(Đúng.)*
- b. GET /users/999 với id không tồn tại → 404 Not Found ✅ *(Đúng.)*
- c. Gọi API không kèm token xác thực → 401 Unauthorized ✅ *(Đúng.)*
- d. Gửi body JSON sai định dạng → 500 Internal Server Error

> Chính xác!
>
> Mẹo nhớ: 2xx "chào mừng" (200 OK, 201 Created cho POST tạo mới); 4xx "lỗi tại bạn" — 400 Bad Request (dữ liệu gửi sai, kể cả JSON sai định dạng), 401 Unauthorized, 403 Forbidden, 404 Not Found; 5xx "lỗi tại tôi" — 500 Internal Server Error, 502 Bad Gateway. Đáp án d sai: JSON sai định dạng là lỗi do client gửi → 400, không phải 500. Quy trình chuẩn của API automation: Gửi Request → Assert Status Code → Assert Payload.
>
> The correct answers are: POST /users tạo tài khoản thành công → 201 Created, GET /users/999 với id không tồn tại → 404 Not Found, Gọi API không kèm token xác thực → 401 Unauthorized

---

#### Question 34

Team có một script kiểm thử đăng nhập và muốn chạy nó với 200 bộ dữ liệu tài khoản khác nhau lưu trong file CSV, mà không phải copy-paste code 200 lần. Nên dùng loại framework automation nào?

**Select one:**

- a. Linear Scripting (Record & Playback)
- b. Keyword-Driven Framework
- c. Behavior-Driven Development (BDD) với Cucumber
- d. Data-Driven Framework ✅ *(Chính xác. Tách riêng Test Script và Test Data — một đoạn code chạy với hàng trăm dòng dữ liệu.)*

> Chính xác!
>
> Data-Driven Framework tách riêng Test Script và Test Data (JSON, CSV, DB): một đoạn code có thể chạy với hàng trăm dòng dữ liệu. Linear Scripting (ghi lại và chạy) khiến code bị lặp lại nhiều, khó bảo trì. Keyword-Driven tách các hành động thành "từ khóa" (ví dụ Login, Click_Nút_Mua). BDD viết kịch bản bằng ngôn ngữ tự nhiên Given-When-Then. Hiện nay Hybrid Framework (kết hợp Data-driven và Keyword/BDD) là xu hướng chính.
>
> The correct answer is: Data-Driven Framework

---

#### Question 35

Hoạt động nào sau đây thuộc tư duy Shift-Left?

**Select one:**

- a. A/B Testing trên production
- b. Review tài liệu yêu cầu, Unit Test, phân tích tĩnh (Static Analysis) ngay từ đầu dự án ✅ *(Chính xác. Shift-Left = đẩy kiểm thử sang trái, làm sớm hơn.)*
- c. Theo dõi log lỗi của người dùng thực sau khi release
- d. Kiểm thử khả năng chịu tải khi hệ thống đã vận hành ổn định

> Chính xác!
>
> Shift-Left: đẩy kiểm thử "sang trái" (làm sớm hơn) → review tài liệu, unit test, static analysis để bắt lỗi khi chi phí sửa còn rẻ. Shift-Right: đẩy "sang phải" (sau khi release) → A/B testing, theo dõi log lỗi của người dùng thực. Trong văn hóa DevOps, Continuous Testing nghĩa là kiểm thử không còn là một "giai đoạn" ở cuối dự án mà diễn ra ở mọi thời điểm, từ lúc viết code đến khi hệ thống đang chạy (monitoring in production).
>
> The correct answer is: Review tài liệu yêu cầu, Unit Test, phân tích tĩnh (Static Analysis) ngay từ đầu dự án

---

#### Question 36

Pipeline CI/CD của team: Dev push code → server tự động build và chạy Unit/API Test; sau đó tự động đẩy sang môi trường Staging, chạy UI/E2E Test, nếu pass 100% thì đẩy lên Production. Phát biểu ĐÚNG là?

**Select one:**

- a. Giai đoạn push code → build → chạy Unit/API Test chính là CD
- b. Trong CI/CD không cần chạy test tự động, chỉ cần build
- c. UI/E2E Test nên chạy ở bước CI ngay sau khi push code
- d. CI giúp phát hiện code xung đột ngay lập tức; CD tự động triển khai qua Staging (chạy E2E) lên Production khi pass 100% ✅ *(Chính xác.)*

> Chính xác!
>
> CI (Continuous Integration): dev push code → server tự động build → tự động chạy Unit/API Test, mục tiêu phát hiện code xung đột ngay lập tức. CD (Continuous Delivery/Deployment): tự động đẩy code sang môi trường Staging → chạy UI/E2E Test → nếu pass 100% thì đẩy lên Production. Với GitHub Actions, sinh viên không cần bấm chạy tay: server tự chạy và gửi email báo lỗi nếu test fail.
>
> The correct answer is: CI giúp phát hiện code xung đột ngay lập tức; CD tự động triển khai qua Staging (chạy E2E) lên Production khi pass 100%

---

#### Question 37

Chọn **BA** ứng dụng của Generative AI (LLM) trong vòng đời kiểm thử.

**Select one or more:**

- a. Đưa tài liệu đặc tả vào LLM để trích xuất tự động danh sách Test Conditions ✅ *(Đúng – hỗ trợ phân tích yêu cầu.)*
- b. Sinh hàng ngàn dòng dữ liệu kiểm thử giả (tên, email, số thẻ) bằng prompt thay vì gõ tay ✅ *(Đúng – test data generation.)*
- c. Chuyển Test Case viết bằng tiếng Anh thành mã Playwright/JS (Text-to-Code) ✅ *(Đúng – viết test script.)*
- d. Thay thế hoàn toàn tester, không cần kiểm tra lại kết quả của AI
- e. Tự động sửa mọi bug mà không cần developer

> Chính xác!
>
> Ngày nay LLM được dùng như một "trợ lý ảo" (Copilot) hỗ trợ tester ở hầu hết các khâu: phân tích yêu cầu, sinh test data, viết test script. Kỹ năng mới của tester là Prompt Engineering — chất lượng test case sinh ra phụ thuộc hoàn toàn vào cách đặt câu lệnh cho AI. Đáp án d, e sai: tuyệt đối không nhắm mắt tin tưởng 100% vào kết quả của AI.
>
> The correct answers are: Đưa tài liệu đặc tả vào LLM để trích xuất tự động danh sách Test Conditions, Sinh hàng ngàn dòng dữ liệu kiểm thử giả (tên, email, số thẻ) bằng prompt thay vì gõ tay, Chuyển Test Case viết bằng tiếng Anh thành mã Playwright/JS (Text-to-Code)

---

#### Question 38

Chọn **HAI** rủi ro khi sử dụng Gen-AI trong kiểm thử mà tester phải cảnh giác.

**Select one or more:**

- a. Ảo giác (Hallucination): AI bịa ra Test Case cho các tính năng hoàn toàn không tồn tại ✅ *(Đúng.)*
- b. Rò rỉ dữ liệu (Data Privacy): đưa mã nguồn nội bộ hoặc dữ liệu thật của khách hàng lên nền tảng AI công cộng có thể vi phạm NDA ✅ *(Đúng.)*
- c. AI chạy test nhanh hơn con người
- d. AI giúp viết báo cáo defect đẹp hơn

> Chính xác!
>
> Ba rủi ro chính khi dùng Gen-AI: (1) Hallucination — bịa test case cho tính năng không tồn tại; (2) Data Privacy — đưa code/dữ liệu thật lên AI công cộng vi phạm NDA; (3) Thiếu tư duy phản biện — AI thường chỉ sinh các test case Happy path quá cơ bản, bỏ sót các trường hợp kiểm thử ranh giới (BVA) phức tạp. Đáp án c là lợi ích chứ không phải rủi ro.
>
> The correct answers are: Ảo giác (Hallucination): AI bịa ra Test Case cho các tính năng hoàn toàn không tồn tại, Rò rỉ dữ liệu (Data Privacy): đưa mã nguồn nội bộ hoặc dữ liệu thật của khách hàng lên nền tảng AI công cộng có thể vi phạm NDA

---

#### Question 39

Khi kiểm thử chatbot tuyển sinh dùng LLM, cùng một câu hỏi nhưng mỗi lần hỏi AI lại trả lời với văn phong khác nhau. Vì sao KHÔNG nên dùng assert so sánh chuỗi chính xác (exact match) trong trường hợp này?

**Select one:**

- a. Vì chatbot không phải là phần mềm nên không thể kiểm thử
- b. Vì hệ thống AI là phi tất định (non-deterministic) và tồn tại "bài toán Oracle" — khó xác định kết quả mong đợi tuyệt đối ✅ *(Chính xác.)*
- c. Vì assert chuỗi chính xác chạy quá chậm với LLM
- d. Vì LLM không trả về dữ liệu dạng văn bản

> Chính xác!
>
> Hệ thống truyền thống là tất định (deterministic): input A luôn cho đúng output B, pass/fail rõ ràng theo exact match. Hệ thống AI/LLM là phi tất định: cùng một input, mỗi lần sinh câu trả lời có văn phong khác nhau → "bài toán Oracle": khó xác định đâu là kết quả mong đợi tuyệt đối. Giải pháp: thay vì assert chuỗi chính xác, đánh giá bằng độ tương đồng ngữ nghĩa, kiểm tra fact cốt lõi bằng heuristic (ví dụ câu trả lời phải chứa "1959"), hoặc dùng LLM làm giám khảo chấm điểm.
>
> The correct answer is: Vì hệ thống AI là phi tất định (non-deterministic) và tồn tại "bài toán Oracle" — khó xác định kết quả mong đợi tuyệt đối

---

#### Question 40

So với Tháp kiểm thử truyền thống (ưu tiên Unit 70%), điểm khác biệt cốt lõi của mô hình Testing Trophy (Kent C. Dodds) là gì?

**Select one:**

- a. Bỏ hoàn toàn Unit Test và E2E Test
- b. Viết càng nhiều E2E test càng tốt vì gần người dùng nhất
- c. Ưu tiên đầu tư trọng tâm vào Integration Test (tầng lớn nhất) vì cho độ tin cậy cao với chi phí hợp lý; tầng Static (ESLint, TypeScript) bắt lỗi gần như miễn phí ✅ *(Chính xác.)*
- d. Chỉ kiểm thử bằng tay, không cần automation

> Chính xác!
>
> Testing Trophy phù hợp với phát triển web hiện đại: Static ở đáy (ESLint, TypeScript bắt lỗi ngay khi gõ code, gần như miễn phí), Integration là tầng lớn nhất — trọng tâm đầu tư vì cho độ tin cậy cao với chi phí hợp lý, Unit và E2E vẫn cần nhưng vừa phải. Khác biệt cốt lõi với tháp truyền thống: chuyển trọng tâm đầu tư từ Unit sang Integration.
>
> The correct answer is: Ưu tiên đầu tư trọng tâm vào Integration Test (tầng lớn nhất) vì cho độ tin cậy cao với chi phí hợp lý; tầng Static (ESLint, TypeScript) bắt lỗi gần như miễn phí
