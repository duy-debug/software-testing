# Bài quiz — Kiểm thử phần mềm (SOT357): 80 câu, 2 đề (Bộ mới — dựa trên nội dung giữa kỳ GK)

> Bộ câu hỏi mới được soạn dựa trên nội dung trong gk.zip (quiz giữa kỳ + trắc nghiệm cuối buổi 1–3) và bám sát chủ đề của bộ 80 câu SOT357: tình huống và số liệu đều mới, format đáp án & giải thích theo mẫu gk_quiz.

## Phần 1: Đề thi (chưa có đáp án & lời giải)

### Đề 1 — Tổng quan, SDLC, các cấp độ & Kiểm thử tĩnh (40 câu)

#### Question 1

Tester Mai phụ trách kiểm thử chức năng "Thanh toán hóa đơn điện" của một app ngân hàng. Cô chỉ chạy các luồng thành công (nhập đúng mã khách hàng, số dư đủ), thấy mọi thứ chạy mượt nên kết luận: "Phần mềm này rất tốt, không cần test thêm."

Cách hiểu nào sau đây là ĐÚNG về kiểm thử phần mềm?

**Select one:**

- a. Kiểm thử là chạy mọi đường đi có thể để chứng minh phần mềm hoàn toàn đúng
- b. Kiểm thử chỉ nhằm xác nhận phần mềm không còn lỗi trước khi giao khách hàng
- c. Kiểm thử là quá trình thực thi chương trình nhằm tìm lỗi và đánh giá các đặc tính, chất lượng của sản phẩm
- d. Kiểm thử chỉ là việc chạy lại bộ test case mỗi khi có bản release mới

---

#### Question 2

Phần mềm quản lý hồ sơ bệnh nhân của một bệnh viện được nghiệm thu vì chạy đúng mọi đặc tả kỹ thuật đã ký: lưu đúng dữ liệu, in đúng báo cáo, phân quyền đúng. Tuy nhiên khi bác sĩ dùng thực tế, họ phát hiện hệ thống thiếu hẳn chức năng cảnh báo dị ứng thuốc của bệnh nhân – điều họ coi là bắt buộc trong nghiệp vụ.

Vấn đề này thuộc về khía cạnh nào?

**Select one:**

- a. Kiểm thử tích hợp – vì các module chưa kết nối tốt với nhau
- b. Validation – kiểm tra "Are we building the right product?"
- c. Kiểm thử tĩnh – vì lỗi nằm ở tài liệu đặc tả
- d. Verification – kiểm tra "Are we building the product right?"

---

#### Question 3

Xét tình huống ở hệ thống ATM của một ngân hàng:
(i) Nhân viên vận hành nhập sai mức lãi suất khi cấu hình (một hành động của con người);
(ii) Trong mã nguồn, công thức tính lãi bị viết sai, lưu sai kết quả trung gian;
(iii) Khi khách hàng giao dịch, tài khoản bị trừ sai số tiền so với thực tế.

Thứ tự đúng theo chuỗi Error → Defect → Failure là:

**Select one:**

- a. (ii) → (i) → (iii)
- b. (i) → (iii) → (ii)
- c. (iii) → (ii) → (i)
- d. (i) → (ii) → (iii)

---

#### Question 4

Developer viết hàm tính thuế thu nhập cho nhân sự: theo yêu cầu thuế suất là 0.12, nhưng anh ta dùng nhầm hằng số 0.1 trong mã nguồn, khiến lương thực nhận của nhân viên bị tính sai.

Đoạn mã dùng hằng số sai đó chính là gì?

**Select one:**

- a. Đoạn mã dùng hằng số sai đó chính là Defect
- b. Đó là một Error
- c. Đó là một Failure
- d. Đó là yêu cầu bị thiếu

---

#### Question 5

Sau một đợt kiểm thử chức năng "Đặt vé tàu online", toàn bộ 1000 test case đều Pass. Giám đốc dự án tuyên bố: "1000 test case đều pass, chứng tỏ phần mềm không còn lỗi nào, có thể bàn giao ngay."

Theo Nguyên lý 1 của kiểm thử, tuyên bố này sai ở đâu?

**Select one:**

- a. Sai vì 1000 test case là quá ít, cần ít nhất 5000 test case
- b. Sai vì bộ test case chưa bao gồm kiểm thử hiệu năng
- c. Kiểm thử chỉ cho thấy sự HIỆN DIỆN của lỗi, không bao giờ chứng minh được sự VẮNG MẶT của lỗi
- d. Sai vì nên dùng kiểm thử tự động thay vì kiểm thử thủ công

---

#### Question 6

Một form "Đăng ký tài khoản khách hàng" có 5 trường dropdown: Tỉnh/Thành, Quận/Huyện, Loại tài khoản, Ngôn ngữ, Kênh giới thiệu. Mỗi trường có đúng 10 giá trị lựa chọn. Tester muốn kiểm thử mọi tổ hợp giá trị có thể của 5 trường này.

Tổng số tổ hợp và kết luận đúng theo Nguyên lý 2 là gì?

**Select one:**

- a. 50 tổ hợp – có thể kiểm thử cạn kiệt dễ dàng
- b. 100.000 tổ hợp – không thể kiểm thử cạn kiệt, phải ưu tiên kiểm thử theo rủi ro
- c. 500 tổ hợp – vẫn kiểm thử hết được trong một buổi
- d. 10.000 tổ hợp – chỉ cần thêm tester là kiểm thử hết được

---

#### Question 7

Trong một dự án xây dựng hệ thống tính điểm thi, ở giai đoạn phân tích yêu cầu, tester phát hiện hai yêu cầu mâu thuẫn nhau về cách làm tròn điểm ưu tiên. Lỗi được sửa ngay trong tài liệu. Một lỗi tương tự ở dự án trước chỉ được phát hiện khi hệ thống đã bước vào giai đoạn kiểm thử, và chi phí sửa gấp nhiều lần.

Phát biểu nào đúng theo nguyên lý "kiểm thử sớm" (early testing)?

**Select one:**

- a. Phát hiện và sửa lỗi càng sớm trong vòng đời phát triển thì chi phí càng thấp
- b. Lỗi yêu cầu nên để đến giai đoạn kiểm thử mới phát hiện để có test case cụ thể
- c. Chi phí sửa lỗi ở giai đoạn nào cũng như nhau
- d. Kiểm thử sớm chỉ áp dụng cho kiểm thử đơn vị, không áp dụng cho yêu cầu

---

#### Question 8

Thống kê sau 2 tháng của một dự án thương mại điện tử: trong tổng số 200 bug được tìm thấy, có tới 150 bug tập trung ở chỉ 3 trong tổng số 12 module của hệ thống (các module Giỏ hàng, Thanh toán, Khuyến mãi).

Theo Nguyên lý 4, hành động hợp lý nhất của test lead là gì?

**Select one:**

- a. Chia đều thời gian kiểm thử cho cả 12 module vì mỗi module đều quan trọng như nhau
- b. Dừng kiểm thử 3 module nhiều bug để tránh "làm khó" developer
- c. Chỉ kiểm thử 3 module đó và bỏ qua 9 module còn lại
- d. Tập trung nỗ lực kiểm thử vào 3 module nhiều bug, vì lỗi có xu hướng tập trung (defect clustering)

---

#### Question 9

Một team kiểm thử chạy đi chạy lại cùng một bộ 300 test case suốt 6 tháng. Ba tháng gần đây, bộ test này không tìm ra thêm bất kỳ bug mới nào, dù developer vẫn liên tục thêm tính năng mới vào sản phẩm.

Chọn **HAI** phát biểu ĐÚNG về Nguyên lý 5 – Nghịch lý thuốc trừ sâu (Pesticide paradox):

**Select one or more:**

- a. Đây là dấu hiệu tốt, chứng tỏ phần mềm đã hết lỗi nên không cần thay đổi gì
- b. Lặp đi lặp lại cùng một bộ test case sẽ không tìm ra defect mới – cần review và cập nhật bộ test
- c. Giải pháp là tăng gấp đôi số lần chạy bộ test cũ mỗi tuần
- d. Cần thiết kế thêm test case mới bao phủ các tính năng mới và các kịch bản chưa được kiểm thử
- e. Nên xóa bỏ bộ test cũ vì nó không còn giá trị

---

#### Question 10

Công ty X có hai sản phẩm: (1) phần mềm điều khiển cần cẩu tháp trên công trường xây dựng, (2) ứng dụng đọc truyện tranh giải trí trên điện thoại. Team kiểm thử nhận thấy cách tiếp cận kiểm thử cho hai sản phẩm này hoàn toàn khác nhau: với cần cẩu phải kiểm tra an toàn, thời gian thực, xử lý sự cố phần cứng; với app truyện chỉ cần chú trọng giao diện, tốc độ tải, trải nghiệm người dùng.

Điều này minh họa nguyên lý nào?

**Select one:**

- a. Nguyên lý 6 – Kiểm thử phụ thuộc vào ngữ cảnh (Testing is context dependent)
- b. Nguyên lý 1 – Kiểm thử cho thấy sự hiện diện của lỗi
- c. Nguyên lý 3 – Kiểm thử sớm tiết kiệm thời gian và chi phí
- d. Nguyên lý 7 – Ngụy biện không có lỗi

---

#### Question 11

Ứng dụng "Ghi chú giọng nói" của một startup vượt qua 100% test case, không còn bug nào được ghi nhận, chạy đúng toàn bộ đặc tả kỹ thuật đã duyệt. Tuy nhiên sau 3 tháng ra mắt, số người dùng active gần như bằng 0 – khảo sát cho thấy người dùng không hề có nhu cầu ghi chú bằng giọng nói, họ chỉ cần ghi chú văn bản nhanh.

Thất bại này minh họa nguyên lý nào?

**Select one:**

- a. Nguyên lý 2 – Không thể kiểm thử cạn kiệt
- b. Nguyên lý 4 – Lỗi có xu hướng tập trung
- c. Nguyên lý 5 – Nghịch lý thuốc trừ sâu
- d. Nguyên lý 7 – Ngụy biện không có lỗi (Absence-of-errors fallacy)

---

#### Question 12

Một công ty phần mềm đang phát triển hệ thống quản lý kho cho khách hàng lớn. Họ cân nhắc các phương án tổ chức kiểm thử sau:
(i) Developer tự kiểm thử module do chính mình viết;
(ii) Một tester thuộc cùng team phát triển, ngồi cùng dự án, kiểm thử sản phẩm;
(iii) Thuê một đội kiểm thử độc lập của công ty thứ ba, không tham gia phát triển, kiểm thử sản phẩm.

Theo mức độ độc lập trong kiểm thử, phương án nào cho tính khách quan CAO NHẤT?

**Select one:**

- a. Phương án (i) vì developer hiểu rõ code của mình nhất
- b. Phương án (ii) vì tester cùng team nắm rõ tiến độ dự án
- c. Phương án (iii) – đội kiểm thử độc lập bên thứ ba
- d. Cả ba phương án có tính khách quan như nhau

---

#### Question 13

Một dự án phần mềm quản lý bệnh viện được phát triển theo V-Model. Test manager khẳng định: "Theo mô hình này, chúng ta không đợi code xong mới bắt đầu kiểm thử."

Phát biểu nào mô tả ĐÚNG đặc trưng của V-Model?

**Select one:**

- a. V-Model là mô hình Agile, mỗi iteration kéo dài 2 tuần
- b. Mỗi giai đoạn phát triển (yêu cầu, thiết kế, coding) đều có cấp kiểm thử tương ứng, và hoạt động kiểm thử (lập kế hoạch, thiết kế test) bắt đầu song song từ sớm
- c. V-Model bỏ qua kiểm thử đơn vị, chỉ thực hiện kiểm thử hệ thống
- d. V-Model yêu cầu khách hàng thay đổi yêu cầu liên tục

---

#### Question 14

Một công ty làm phần mềm quản lý nhân sự theo mô hình thác nước (Waterfall). Toàn bộ yêu cầu được chốt và ký duyệt ngay từ đầu dự án. Đến tháng thứ 8 (trong tổng số 10 tháng), khách hàng yêu cầu bổ sung module chấm công bằng khuôn mặt – một thay đổi lớn. Dự án rơi vào khủng hoảng: phải quay lại sửa tài liệu, thiết kế, code gần như từ đầu.

Tình huống này phản ánh nhược điểm nào của Waterfall?

**Select one:**

- a. Waterfall không có giai đoạn kiểm thử
- b. Waterfall không cần tài liệu yêu cầu
- c. Waterfall phát hành sản phẩm quá nhanh khiến khách hàng không kịp dùng
- d. Yêu cầu bị "đóng băng" từ đầu, khách hàng chỉ thấy sản phẩm ở cuối nên khó ứng phó khi yêu cầu thay đổi

---

#### Question 15

Trong team Scrum phát triển ứng dụng đặt lịch khám bệnh (mỗi sprint 2 tuần), tester Hoa có thói quen đợi developer code xong toàn bộ user story rồi mới bắt đầu kiểm thử vào những ngày cuối sprint.

Theo tinh thần Agile, Hoa nên làm gì mới đúng vai trò tester trong Agile?

**Select one:**

- a. Tham gia họp planning, làm việc chặt chẽ với PO và developer hằng ngày, kiểm thử liên tục ngay trong sprint thay vì đợi cuối sprint
- b. Tiếp tục đợi cuối sprint vì chỉ khi đó sản phẩm mới ổn định để kiểm thử
- c. Chỉ kiểm thử sau khi sprint kết thúc để không làm gián đoạn developer
- d. Trong Agile không cần tester vì developer tự kiểm thử là đủ

---

#### Question 16

Một team Agile phát triển app ví điện tử với sprint 2 tuần. Họ gặp khó khăn: yêu cầu thay đổi liên tục theo phản hồi thị trường, tài liệu đặc tả rất sơ sài, mỗi sprint đều có khối lượng regression test khổng lồ nhưng thời gian kiểm thử chỉ còn 2–3 ngày cuối sprint.

Chọn **HAI** phát biểu ĐÚNG về thách thức và hướng giải quyết cho kiểm thử trong Agile:

**Select one or more:**

- a. Vì tài liệu sơ sài nên tester không thể kiểm thử được gì trong Agile
- b. Nên quay lại mô hình Waterfall để có tài liệu đầy đủ rồi mới kiểm thử
- c. Yêu cầu thay đổi liên tục và tài liệu nhẹ là thách thức đặc trưng của kiểm thử Agile
- d. Chỉ cần tăng số lượng tester thủ công là giải quyết được bài toán regression mỗi sprint
- e. Cần đẩy mạnh kiểm thử tự động và CI/CD để regression chạy nhanh, kịp trong mỗi sprint ngắn

---

#### Question 17

Khi viết unit test cho hàm `tinhLuongThuong(nhanVienId)` nằm ở tầng service thấp nhất, chưa có bất kỳ module nào trong hệ thống gọi đến hàm này. Developer tạo ra một đoạn mã giả lập đóng vai trò "người gọi": nó truyền `nhanVienId` vào hàm và nhận kết quả trả về để kiểm tra.

Đoạn mã giả lập "người gọi" này được gọi là gì?

**Select one:**

- a. Stub – vì nó giả lập dữ liệu trả về
- b. Driver
- c. Mock – vì nó kiểm tra tương tác
- d. Fake database

---

#### Question 18

Tester viết unit test cho class `DonHangService`. Class này phụ thuộc vào `EmailGateway` để gửi email xác nhận. Tester không muốn gửi email thật, nhưng CẦN XÁC MINH rằng khi đặt hàng thành công, `DonHangService` có gọi đúng phương thức `guiEmail(diaChi, noiDung)` của `EmailGateway` với đúng tham số, đúng một lần.

Nên dùng kỹ thuật nào?

**Select one:**

- a. Dùng Stub, vì stub cũng giả lập được EmailGateway
- b. Không cần giả lập, cứ gửi email thật cho chắc chắn
- c. Dùng Driver để gọi DonHangService
- d. Dùng Mock – vì mock cho phép verify tương tác (hàm có được gọi đúng cách hay không)

---

#### Question 19

Trong dự án phát triển hệ thống đặt vé máy bay, team lead phân công: "Các bạn developer tự viết và chạy test cho từng hàm, từng class mình vừa code xong, trước khi đẩy code lên để tích hợp."

Phát biểu nào mô tả ĐÚNG về hoạt động kiểm thử này?

**Select one:**

- a. Đây là kiểm thử hệ thống, do tester độc lập thực hiện trên toàn bộ hệ thống
- b. Đây là kiểm thử chấp nhận, do khách hàng thực hiện để nghiệm thu
- c. Đây là kiểm thử đơn vị (Unit Testing): do developer thực hiện, phạm vi là đơn vị nhỏ nhất (hàm/class/module), mục tiêu phát hiện defect sớm ở cấp đơn vị
- d. Đây là kiểm thử tích hợp, nhằm kiểm tra giao tiếp giữa các module

---

#### Question 20

Team có 6 module của hệ thống quản lý kho đã code xong. Test lead quyết định: gộp cả 6 module lại với nhau một lần rồi mới bắt đầu kiểm thử tích hợp. Kết quả: test fail với hàng loạt lỗi, team mất 3 ngày vẫn chưa xác định được lỗi nằm ở module nào hay ở chỗ giao tiếp giữa các module.

Vấn đề của cách làm này (Big Bang) là gì?

**Select one:**

- a. Gộp tất cả module cùng lúc khiến khi test fail rất khó khoanh vùng, xác định nguyên nhân lỗi
- b. Big Bang luôn cho kết quả test pass nhanh hơn tích hợp tăng dần
- c. Big Bang giúp phát hiện lỗi giao tiếp giữa các module tốt hơn tích hợp tăng dần
- d. Vấn đề là team có quá ít module, nên tăng lên 10 module rồi gộp

---

#### Question 21

Hệ thống quản lý nhà thuốc đã tích hợp xong toàn bộ các module: Kho thuốc, Bán hàng, Hóa đơn và Báo cáo tồn kho. Team triển khai toàn bộ hệ thống lên môi trường UAT được cấu hình giống hệt Production, rồi tester đi trọn một luồng end-to-end theo đúng đặc tả yêu cầu: nhập kho một lô thuốc mới → bán lẻ cho khách → xuất hóa đơn → kiểm tra báo cáo tồn kho tự động trừ đúng số lượng.

**Select one:**

- a. Kiểm thử tích hợp – vì các module đã được gộp lại để kiểm tra sự giao tiếp giữa chúng
- b. Kiểm thử đơn vị – vì mỗi bước trong luồng được kiểm tra riêng lẻ
- c. Kiểm thử hệ thống (System Testing) – kiểm tra toàn bộ hệ thống đã lắp ráp hoàn chỉnh, chạy end-to-end theo yêu cầu trên môi trường giống Production
- d. Kiểm thử chấp nhận – vì đã mô phỏng đúng hành vi của người dùng cuối

---

#### Question 22

Công ty phát triển game mobile mở đợt chơi thử sớm: 500 game thủ đăng ký tự nguyện từ cộng đồng bên ngoài công ty được tải bản game về chơi trên chính điện thoại cá nhân của họ trong 2 tuần, trước ngày phát hành chính thức, để công ty thu thập phản hồi về độ ổn định và trải nghiệm chơi.

**Select one:**

- a. Alpha Testing – vì đây là vòng kiểm thử diễn ra trước khi phát hành chính thức
- b. Kiểm thử hệ thống – vì game được kiểm tra như một hệ thống hoàn chỉnh
- c. UAT tại site của khách hàng – vì có người dùng thật tham gia đánh giá
- d. Beta Testing – phát hành cho nhóm người dùng thật bên ngoài công ty dùng thử trong môi trường thật của họ trước khi ra mắt chính thức

---

#### Question 23

Chọn **CÁC** loại kiểm thử thuộc nhóm **Non-functional** (phi chức năng). Biết rằng Functional trả lời "hệ thống **làm cái gì**", còn Non-functional trả lời "hệ thống **làm tốt thế nào**".

**Select one or more:**

- a. Đo thời gian phản hồi của trang đặt vé khi có 5.000 người truy cập cùng lúc
- b. Kiểm tra hệ thống có chặn được truy vấn SQL Injection vào ô tìm kiếm hay không
- c. Kiểm tra đăng nhập thành công khi nhập đúng tên tài khoản và mật khẩu
- d. Kiểm tra hóa đơn tính đúng tổng tiền khi khách áp dụng mã giảm giá
- e. Kiểm tra công thức tính tiền điện theo bậc thang có cho kết quả đúng không

---

#### Question 24

Tester Hùng được giao kiểm thử chức năng "Đổi mật khẩu". Anh nhận tài liệu đặc tả chi tiết: mật khẩu mới tối thiểu 8 ký tự, phải chứa cả chữ và số, xác nhận lại phải trùng khớp. Hùng thiết kế toàn bộ test case chỉ dựa trên đặc tả này – nhập các tổ hợp mật khẩu hợp lệ/không hợp lệ rồi so sánh thông báo hệ thống với kết quả mong đợi trong tài liệu – mà **không hề mở mã nguồn** để xem hàm đổi mật khẩu được cài đặt ra sao. Cách tiếp cận này là gì?

**Select one:**

- a. Kiểm thử hộp đen (Black-box) – tester không xem code, chỉ dựa vào đặc tả đầu vào/đầu ra để thiết kế test case
- b. Kiểm thử hộp trắng (White-box) – vì đã đọc kỹ tài liệu đặc tả chi tiết
- c. Kiểm thử tĩnh – vì không thực thi mã nguồn trong quá trình thiết kế
- d. Kiểm thử hộp trắng – vì test case bao phủ được mọi tổ hợp mật khẩu

---

#### Question 25

Developer vừa sửa xong bug "hệ thống không gửi email xác nhận đơn hàng khi địa chỉ email chứa ký tự '+' (ví dụ: user+shop@gmail.com)". Tester chạy lại **đúng test case đã phát hiện ra bug này** để xác nhận email xác nhận nay đã được gửi đi bình thường. Sau đó, tester chạy thêm toàn bộ test case của module "Thông báo" và "Đăng ký tài khoản" để đảm bảo bản sửa lỗi không vô tình làm hỏng chức năng khác. Hai hoạt động này lần lượt là gì?

**Select one:**

- a. Cả hai hoạt động đều là Regression Testing
- b. Lần 1 là Confirmation Testing (Re-test) – chạy lại test case đã fail để xác nhận lỗi đã được sửa; lần 2 là Regression Testing – chạy bộ test cũ để đảm bảo vùng không thay đổi vẫn hoạt động đúng
- c. Lần 1 là Regression Testing, lần 2 là Confirmation Testing
- d. Cả hai hoạt động đều là Confirmation Testing

---

#### Question 26

Hệ thống tính lương đã vận hành ổn định trên Production được 3 năm. Nay Nhà nước ban hành biểu thuế thu nhập cá nhân mới có hiệu lực từ tháng tới, buộc công ty phải sửa lại công thức tính thuế trong hệ thống. Trước khi developer bắt tay vào sửa code, test lead yêu cầu phân tích xem thay đổi này ảnh hưởng đến những module, test case và dữ liệu nào. Tình huống này thuộc loại kiểm thử nào?

**Select one:**

- a. Không cần kiểm thử vì chỉ thay đổi công thức tính thuế, không thêm tính năng mới
- b. Kiểm thử chấp nhận – vì thay đổi xuất phát từ yêu cầu của cơ quan nhà nước
- c. Kiểm thử hệ thống lần đầu – vì phải kiểm tra lại toàn bộ hệ thống từ đầu
- d. Kiểm thử bảo trì (Maintenance Testing) – hệ thống đang vận hành phải thay đổi do quy định pháp luật mới, và bắt buộc phải phân tích tác động (Impact Analysis) trước khi sửa để xác định phạm vi kiểm thử hồi quy

---

#### Question 27

Hoạt động nào sau đây là **kiểm thử tĩnh (Static Testing)**?

**Select one:**

- a. Ba tester ngồi lại với nhau, đọc kỹ tài liệu thiết kế chi tiết của module "Đặt sân bóng", đối chiếu từng mục với tài liệu yêu cầu và ghi lại các điểm mâu thuẫn – mà không chạy bất kỳ dòng code nào
- b. Chạy các test case đặt sân trên môi trường Staging để kiểm tra luồng nghiệp vụ
- c. Dùng JMeter bắn 1.000 request đồng thời vào hệ thống để đo thời gian phản hồi
- d. Mời người dùng thật dùng thử ứng dụng và thu thập phản hồi của họ

---

#### Question 28

Developer Lan vừa viết xong tài liệu đặc tả API cho module thanh toán. Cô gửi link tài liệu cho anh đồng nghiệp ngồi cùng phòng, nhắn: "Anh rảnh thì liếc qua giúp em 15 phút xem có chỗ nào vô lý không nhé". Không có lịch họp chính thức, không checklist, không ai ghi biên bản. Theo phân loại review, đây là loại nào?

**Select one:**

- a. Inspection – vì có người khác rà soát tài liệu
- b. Walkthrough – vì đồng nghiệp sẽ đi qua từng phần của tài liệu
- c. Informal Review – đồng nghiệp xem nhanh tài liệu, không theo quy trình chính thức, không ghi biên bản
- d. Technical Review – vì tài liệu đặc tả API mang tính kỹ thuật

---

#### Question 29

Đối với module lõi xử lý giao dịch chuyển tiền quốc tế – phần rủi ro cao nhất của hệ thống ngân hàng – công ty tổ chức một buổi review **khắt khe nhất**: có Moderator điều phối, các reviewer đọc trước tài liệu và rà soát từng mục theo **checklist tiêu chuẩn**, mọi lỗi phát hiện đều được ghi lại kèm **số liệu thống kê (metrics)**, và tác giả của tài liệu **không được** làm người điều phối buổi review. Đây là loại hình review nào?

**Select one:**

- a. Walkthrough – vì cả nhóm cùng đi qua từng phần của tài liệu
- b. Inspection – loại review chính thức và khắt khe nhất: có Moderator, checklist chuẩn, ghi metrics, tác giả không được làm review leader
- c. Informal Review – vì chỉ tập trung vào một module duy nhất
- d. Technical Review – vì có các chuyên gia đánh giá tính khả thi của giải pháp

---

#### Question 30

Trong một buổi Inspection chính thức, ai là người chịu trách nhiệm **điều phối buổi review** (lên lịch, dẫn dắt buổi họp, đảm bảo mọi người tuân thủ đúng quy trình)?

**Select one:**

- a. Author (Tác giả) – vì là người hiểu rõ nhất sản phẩm được review
- b. Manager – vì là người có quyền quyết định phân bổ thời gian và nhân sự
- c. Tester – vì tester là người chịu trách nhiệm chính về chất lượng
- d. Moderator / Review Leader – người điều phối buổi review, đảm bảo đúng tiến độ và hiệu quả

---

#### Question 31

Team chạy SonarQube quét toàn bộ mã nguồn, kết quả báo "0 lỗi – code sạch 100%". Tuy nhiên khi demo cho khách hàng, khách phát hiện chức năng "xuất báo cáo theo quý" ghi rõ trong hợp đồng vẫn **chưa hề được cài đặt**, và sau khi release, một số lỗi chỉ xuất hiện khi hệ thống chạy với dữ liệu thật trên production. Điều nào sau đây công cụ phân tích tĩnh **KHÔNG** làm được?

**Select one:**

- a. Phát hiện các yêu cầu bị thiếu/chưa được cài đặt và các lỗi chỉ bộc lộ khi chương trình thực thi với dữ liệu thật
- b. Phát hiện biến được khai báo và gán giá trị nhưng không bao giờ sử dụng
- c. Phát hiện đoạn code nằm sau lệnh return nên không bao giờ được thực thi
- d. Phát hiện mật khẩu và API key bị ghi cứng (hardcode) trong mã nguồn

---

#### Question 32

Chọn **HAI** phát biểu **đúng** về lợi ích của kiểm thử tĩnh (Static Testing).

**Select one or more:**

- a. Phát hiện Defect ngay trong tài liệu yêu cầu và thiết kế, từ trước khi một dòng code nào được viết – càng sửa sớm càng rẻ
- b. Giúp chương trình chạy nhanh hơn khi thực thi vì code đã được rà soát kỹ
- c. Phát hiện sớm các yêu cầu mâu thuẫn, mơ hồ hoặc thiếu sót trước khi chúng biến thành bug trong code
- d. Thay thế hoàn toàn kiểm thử động, giúp team không cần chạy test case nữa
- e. Tự động sửa mọi lỗi trong mã nguồn mà không cần developer can thiệp

---

#### Question 33

Trong quy trình kiểm thử cơ bản (Fundamental Test Process), hoạt động nào trả lời cho câu hỏi kiểm thử **CÁI GÌ** – tức là phân tích test basis (tài liệu yêu cầu, thiết kế) để xác định các test conditions cần kiểm tra?

**Select one:**

- a. Test Planning – lập kế hoạch kiểm thử, xác định lịch trình và nguồn lực
- b. Test Analysis – phân tích test basis để xác định CÁI GÌ cần kiểm thử (test conditions)
- c. Test Implementation – viết test case chi tiết và chuẩn bị dữ liệu kiểm thử
- d. Test Execution – chạy các test case và ghi nhận kết quả Pass/Fail

---

#### Question 34

Điều kiện nào sau đây là **Entry Criteria** – điều kiện cần thỏa mãn để được **BẮT ĐẦU** thực hiện kiểm thử?

**Select one:**

- a. 100% test case đã được thực thi và không còn defect nào ở trạng thái mở
- b. Các tester đã được nghỉ ngơi đầy đủ để đảm bảo sự tỉnh táo khi kiểm thử
- c. Môi trường kiểm thử đã sẵn sàng, dữ liệu kiểm thử đã được chuẩn bị đầy đủ, và bản build đã vượt qua smoke test
- d. Developer vừa commit một loạt code mới lên nhánh kiểm thử

---

#### Question 35

Điều nào sau đây là **Exit Criteria** hợp lệ – điều kiện để **KẾT THÚC** hoạt động kiểm thử?

**Select one:**

- a. Tester cảm thấy đã mệt nên quyết định dừng kiểm thử
- b. Dự án hết ngân sách nên dừng kiểm thử ngay lập tức mà không cần báo cáo
- c. Developer vừa bàn giao thêm một tính năng mới cần kiểm thử bổ sung
- d. 100% test case ưu tiên cao đã được chạy, không còn lỗi Critical/Blocker nào ở trạng thái mở, và độ bao phủ kiểm thử đạt ngưỡng yêu cầu

---

#### Question 36

Trong Test Plan, mục **"Test Approach" (Cách tiếp cận kiểm thử)** mô tả điều gì?

**Select one:**

- a. Các cấp độ và loại hình kiểm thử sẽ áp dụng, kỹ thuật thiết kế test case và mức độ tự động hóa
- b. Phạm vi kiểm thử: tính năng nào sẽ được kiểm thử và tính năng nào sẽ không được kiểm thử
- c. Lịch trình kiểm thử: các mốc thời gian bắt đầu và kết thúc từng giai đoạn
- d. Nguồn lực kiểm thử: số lượng tester, vai trò và cấu hình môi trường

---

#### Question 37

Ma trận truy vết yêu cầu (RTM) được nói là hỗ trợ **truy vết hai chiều (bidirectional traceability)**. Điều này có nghĩa là gì?

**Select one:**

- a. Chỉ truy vết được một chiều từ yêu cầu xuống các test case
- b. Vừa truy ngược (backward) từ một Test Case về yêu cầu mà nó kiểm tra, vừa truy xuôi (forward) từ một yêu cầu ra tất cả Test Case liên quan
- c. Truy vết sự thay đổi giữa hai bản build liên tiếp của hệ thống
- d. Truy vết mối liên hệ giữa test case kiểm thử thủ công và test case tự động

---

#### Question 38

Chọn **HAI** tình huống là **rủi ro dự án (Project Risk)** – tức rủi ro ảnh hưởng đến khả năng hoàn thành dự án đúng tiến độ, ngân sách.

**Select one or more:**

- a. Nhà cung cấp bàn giao môi trường kiểm thử trễ 3 tuần so với kế hoạch
- b. Phần mềm tính sai tiền lương hàng tháng của nhân viên
- c. Dữ liệu cá nhân của khách hàng có nguy cơ bị rò rỉ ra bên ngoài
- d. Giao diện ứng dụng quá khó dùng khiến người dùng bỏ app hàng loạt
- e. Tester chủ chốt xin nghỉ việc giữa lúc dự án đang cao điểm

---

#### Question 39

Hai rủi ro được đánh giá theo thang ảnh hưởng 10 điểm: R_A có xác suất xảy ra 0,4 và mức độ ảnh hưởng 9/10; R_B có xác suất xảy ra 0,8 và mức độ ảnh hưởng 5/10. Theo công thức **Mức độ rủi ro = Xác suất × Mức độ ảnh hưởng**, rủi ro nào cần được ưu tiên kiểm thử trước?

**Select one:**

- a. R_A, vì mức độ ảnh hưởng 9 cao hơn hẳn mức 5 của R_B
- b. Cả hai rủi ro có mức độ ngang nhau nên ưu tiên như nhau
- c. R_B, vì 0,8 × 5 = 4,0 lớn hơn 0,4 × 9 = 3,6
- d. Không thể so sánh vì hai rủi ro thuộc loại khác nhau

---

#### Question 40

Trong Planning Poker, cả team **úp thẻ ước lượng xuống bàn và lật lên đồng thời**, thay vì để từng người nói ra con số của mình lần lượt. Vì sao phải làm như vậy?

**Select one:**

- a. Để rút ngắn thời gian họp ước lượng
- b. Vì quy tắc của dãy số Fibonacci bắt buộc các con số phải được giữ bí mật
- c. Để các thành viên mới không cần tham gia vào việc ước lượng
- d. Để tránh thiên kiến neo (anchoring) – ý kiến của người nói trước, đặc biệt là cấp trên hoặc người có ảnh hưởng, sẽ chi phối ước lượng của những người còn lại

---

---

### Đề 2 — Kỹ thuật thiết kế, Quản lý & Tự động hoá (40 câu)

#### Question 1

Phần mềm chấm điểm thi của trường yêu cầu: điểm thi là số thực từ **0 đến 10**, trong đó điểm **dưới 5** xếp loại "Rớt", điểm từ **5 đến dưới 8** xếp loại "Đạt", điểm từ **8 đến 10** xếp loại "Giỏi". Nếu áp dụng kỹ thuật **Phân vùng tương đương (Equivalence Partitioning)**, số phân vùng **hợp lệ** và số lượng test case tối thiểu để đạt 100% bao phủ EP (chỉ tính vùng hợp lệ) lần lượt là:

**Select one:**

- a. 2 phân vùng và 2 test case
- b. 1 phân vùng và 1 test case
- c. 3 phân vùng và 3 test case
- d. 4 phân vùng và 4 test case

---

#### Question 2

Trường học quy định: trường **"Số tín chỉ đăng ký"** mỗi học kỳ chỉ chấp nhận số nguyên từ **12 đến 24**. Áp dụng Phân vùng tương đương, số phân vùng (gồm cả hợp lệ và không hợp lệ) và số test case tối thiểu để bao phủ đủ tất cả các phân vùng lần lượt là:

**Select one:**

- a. 3 phân vùng và 3 test case
- b. 2 phân vùng và 2 test case
- c. 3 phân vùng và 4 test case
- d. 1 phân vùng và 3 test case

---

#### Question 3

Hệ thống đặt phòng khách sạn yêu cầu trường **"Số đêm lưu trú"** nhận số nguyên hợp lệ từ **1 đến 30**. Áp dụng Phân tích giá trị biên theo phương pháp **2 giá trị** (ISTQB), tập giá trị kiểm thử nào là **ĐÚNG**?

**Select one:**

- a. 1, 2, 29, 30
- b. 0, 1, 30, 31
- c. 1, 15, 30
- d. 0, 1, 2, 29, 30, 31

---

#### Question 4

Vẫn trường **"Số đêm lưu trú"** (số nguyên, hợp lệ từ **1 đến 30**), nhưng lần này áp dụng Phân tích giá trị biên theo phương pháp **3 giá trị**. Tập giá trị kiểm thử nào là **ĐÚNG**?

**Select one:**

- a. 0, 1, 30, 31
- b. 1, 2, 29, 30
- c. 0, 15, 30
- d. 0, 1, 2, 29, 30, 31

---

#### Question 5

Một bảng kiểm thử liệt kê **8 giá trị biên** cần kiểm tra cho một trường đầu vào. Nhóm đã thực thi test case bao phủ được **6** trong 8 giá trị đó. Độ bao phủ giá trị biên đạt được là:

**Select one:**

- a. 50%
- b. 60%
- c. 75%
- d. 80%

---

#### Question 6

Khi áp dụng Phân vùng tương đương, phát biểu nào sau đây là **ĐÚNG** về cách kết hợp giá trị vào test case?

**Select one:**

- a. Có thể gộp nhiều giá trị **không hợp lệ** vào cùng một test case để tiết kiệm thời gian
- b. Có thể gộp nhiều giá trị **hợp lệ** (thậm chí từ các vùng hợp lệ khác nhau) vào cùng các test case, nhưng mỗi giá trị **không hợp lệ** nên được đặt trong test case riêng
- c. Mọi giá trị dù hợp lệ hay không đều nên gộp vào cùng một test case
- d. Không bao giờ được gộp hai giá trị thuộc hai phân vùng hợp lệ khác nhau vào cùng một test case

---

#### Question 7

Chương trình ưu đãi học phí của trung tâm xét **3 điều kiện Boolean** độc lập: (C1) học viên cũ, (C2) đăng ký trước hạn, (C3) đóng học phí một lần. Nếu lập bảng quyết định **đầy đủ** (không rút gọn), số cột quy tắc (rule) cần có là:

**Select one:**

- a. 8 cột
- b. 3 cột
- c. 6 cột
- d. 9 cột

---

#### Question 8

Một cột của bảng quyết định đã rút gọn có **3 ô "–" (don't care)** tại các điều kiện Boolean, và cột này dẫn đến một hành động duy nhất. Cột rút gọn này đại diện cho bao nhiêu cột của bảng quyết định đầy đủ?

**Select one:**

- a. 3 cột
- b. 6 cột
- c. 4 cột
- d. 8 cột

---

#### Question 9

Cửa hàng quy định: khách được **giảm 15%** khi thỏa mãn điều kiện: **C1 = T** (có thẻ thành viên Bạc trở lên) **VÀ** (**C2 = T** (đơn hàng trên 300.000đ) **HOẶC** **C3 = T** (có mã voucher)). Một khách hàng **không có thẻ thành viên Bạc** (C1 = F), đơn hàng **500.000đ** (C2 = T), **không có mã voucher** (C3 = F). Kết quả đúng là:

**Select one:**

- a. Được giảm 15% vì đơn hàng trên 300.000đ
- b. Được giảm 10% vì không có thẻ thành viên
- c. Không được giảm 15% vì C1 = F (không có thẻ thành viên Bạc)
- d. Được giảm 15% vì có C2 = T nên không cần xét C1

---

#### Question 10

Trong bảng quyết định của hệ thống quản lý đơn hàng có hai điều kiện: **C1** = "Đơn hàng đã thanh toán", **C2** = "Đơn hàng chưa thanh toán". Tổ hợp C1 = T và C2 = T cùng lúc là tổ hợp **không khả thi** (không thể xảy ra trong thực tế). Cách xử lý đúng khi tính độ bao phủ của bảng quyết định là:

**Select one:**

- a. Vẫn giữ tổ hợp đó và bắt buộc viết test case cho nó để đạt 100% bao phủ
- b. Loại tổ hợp không khả thi khỏi mẫu số khi tính độ bao phủ
- c. Ghi nhận tổ hợp đó là cột "–" (don't care) rồi rút gọn
- d. Bỏ qua toàn bộ bảng quyết định vì có tổ hợp không khả thi

---

#### Question 11

Máy bán nước tự động có các trạng thái: **S1: Chờ tiền**, **S2: Sẵn sàng bán**, **S3: Trả hàng**, với các chuyển trạng thái: S1 --(nạp đủ tiền)--> S2; S1 --(nạp chưa đủ tiền)--> S1; S2 --(chọn nước)--> S3; S3 --(trả hàng xong)--> S1. Người dùng thực hiện chuỗi sự kiện: **nạp đủ tiền → chọn nước → nạp chưa đủ tiền**. Trạng thái cuối cùng của máy là:

**Select one:**

- a. S1: Chờ tiền
- b. S2: Sẵn sàng bán
- c. S3: Trả hàng
- d. Máy bị kẹt ở S3 vì chưa nạp thêm tiền

---

#### Question 12

Một hệ thống có **4 trạng thái** và **5 sự kiện** có thể xảy ra ở mỗi trạng thái. Phân tích cho thấy có **9 chuyển trạng thái hợp lệ**. Số lượng **ô chuyển không hợp lệ** trong bảng chuyển trạng thái là:

**Select one:**

- a. 5
- b. 16
- c. 9
- d. 11

---

#### Question 13

Trong kiểm thử chuyển trạng thái, **bao phủ 1-switch** (N-switch với N=1) được định nghĩa là:

**Select one:**

- a. Thực thi mỗi trạng thái ít nhất một lần
- b. Thực thi mỗi chuyển trạng thái hợp lệ đơn lẻ ít nhất một lần
- c. Thực thi mọi **cặp chuyển trạng thái hợp lệ liên tiếp** (hai chuyển liên tiếp nhau) ít nhất một lần
- d. Thực thi mọi chuyển không hợp lệ ít nhất một lần

---

#### Question 14

Sắp xếp nào sau đây thể hiện đúng thứ tự độ mạnh của các tiêu chí bao phủ chuyển trạng thái, **từ mạnh đến yếu**?

**Select one:**

- a. Bao phủ trạng thái > Bao phủ mọi chuyển (0-switch) > Bao phủ mọi cặp chuyển (1-switch)
- b. Bao phủ mọi cặp chuyển (1-switch) > Bao phủ mọi chuyển hợp lệ (0-switch) > Bao phủ mọi trạng thái
- c. Bao phủ mọi chuyển hợp lệ (0-switch) > Bao phủ mọi cặp chuyển (1-switch) > Bao phủ mọi trạng thái
- d. Cả ba tiêu chí mạnh ngang nhau vì đều kiểm thử chuyển trạng thái

---

#### Question 15

Cho đoạn code:

```c
int f(int x) {
    int y = 0;          // (1)
    if (x > 10) {       // (2)
        y = 1;          // (3)
        y = y + 2;      // (4)
    }
    return y;           // (5)
}
```

Chạy một test case với **x = 5**. Độ bao phủ **lệnh** (statement coverage) đạt được là:

**Select one:**

- a. 100%
- b. 80%
- c. 60%
- d. 50%

---

#### Question 16

Cho đoạn code:

```c
int g(int x) {
    int y = 0;          // (1)
    if (x > 0)          // (2)
        y = 1;          // (3)
    else
        y = -1;         // (4)
    return y;           // (5)
}
```

Chạy duy nhất một test case với **x = 5**. Phát biểu nào sau đây là **ĐÚNG**?

**Select one:**

- a. Bao phủ nhánh đạt 50% (chỉ nhánh True được chạy), trong khi bao phủ lệnh đạt 75% (3/4 lệnh)
- b. Bao phủ nhánh đạt 100% vì điều kiện đã được đánh giá
- c. Bao phủ lệnh đạt 50% và bao phủ nhánh đạt 50%
- d. Bao phủ nhánh đạt 75% và bao phủ lệnh đạt 50%

---

#### Question 17

Một hàm chỉ chứa một câu lệnh `if` **không có** nhánh `else`. Bộ test case đạt **100% bao phủ lệnh** nhưng tất cả các ca test đều đi qua **nhánh True**. Kết luận nào sau đây là **ĐÚNG**?

**Select one:**

- a. Đạt 100% bao phủ lệnh thì chắc chắn đã đạt 100% bao phủ nhánh
- b. Cần thêm ca test đi qua nhánh False mới đạt 100% bao phủ nhánh
- c. Không thể đạt 100% bao phủ lệnh nếu chưa đạt 100% bao phủ nhánh
- d. Với if không có else thì bao phủ lệnh và bao phủ nhánh luôn bằng nhau

---

#### Question 18

Xét vòng lặp `while (a > 0 || b > 0)` trong code Java. Ở mức **bao phủ nhánh** (branch coverage – KHÔNG phải bao phủ điều kiện), biểu thức điều kiện của vòng lặp được xem là:

**Select one:**

- a. Hai quyết định riêng biệt: `a > 0` và `b > 0`
- b. Một quyết định duy nhất với hai kết quả True/False
- c. Ba nhánh: True, False và vòng lặp không bao giờ kết thúc
- d. Một lệnh nên không tính vào bao phủ nhánh

---

#### Question 19

Nhóm phát triển viết hàm tính lương nhưng cài đặt **sai công thức** so với đặc tả yêu cầu (thiếu khoản phụ cấp). Bộ test hộp trắng của họ đạt **100% bao phủ lệnh và 100% bao phủ nhánh**, tất cả test case đều pass. Hạn chế nào của kiểm thử hộp trắng được minh họa ở đây?

**Select one:**

- a. Kiểm thử hộp trắng không thể đạt 100% bao phủ nhánh
- b. Kiểm thử hộp trắng luôn tốn nhiều thời gian hơn kiểm thử hộp đen
- c. Kiểm thử hộp trắng không phát hiện được lỗi sai lệch so với yêu cầu / chức năng bị cài đặt sai hoặc thiếu
- d. Kiểm thử hộp trắng không thể áp dụng cho hàm tính lương

---

#### Question 20

Áp dụng kỹ thuật **đoán lỗi dựa trên kinh nghiệm** (Error Guessing) cho form đăng ký tài khoản, những tình huống nào sau đây là ví dụ **phù hợp**?

**Select one or more:**

- a. Nhập ngày sinh 29/02/2023 (năm 2023 không phải năm nhuận)
- b. Chạy lại toàn bộ bộ regression test tự động sau mỗi lần build
- c. Để trống (chuỗi rỗng) trường "Họ tên" bắt buộc rồi nhấn Đăng ký
- d. Đọc đặc tả yêu cầu để lập ma trận truy vết yêu cầu (RTM)
- e. Nhập ký tự đặc biệt như `' OR '1'='1` vào ô tìm kiếm tên đăng nhập

---

# Đề 2 — Quản lý kiểm thử, tự động hoá, API, CI/CD, AI (Question 21–40)

#### Question 21

Trong một phiên kiểm thử khám phá (Exploratory Testing), trưởng nhóm đưa cho mỗi tester một tờ giấy ghi: *"Khám phá chức năng thanh toán trong 60 phút, tập trung vào các tình huống thanh toán thất bại và thông báo lỗi hiển thị."* Theo khái niệm trong slide, tờ giấy này được gọi là gì?

**Select one:**

- a. Test Charter — tuyên bố ngắn gọn về mục tiêu và phạm vi của một phiên khám phá, giúp tester tự do khám phá nhưng vẫn có định hướng
- b. Test Script chi tiết từng bước
- c. Báo cáo defect
- d. Kế hoạch kiểm thử tổng thể của dự án

---

#### Question 22

Tester báo một defect: *"Nút 'Lưu nháp' trên form đăng ký không hoạt động."* Developer kiểm tra và phát hiện: theo đặc tả, form đăng ký này vốn không hề có chức năng lưu nháp — nút đó chỉ là nhãn trang trí do designer thêm vào. Developer nên chuyển defect sang trạng thái nào?

**Select one:**

- a. Fixed – vì đã xác minh hành vi
- b. Duplicate – vì lỗi này đã được báo trước đó
- c. Rejected – vì đây là hành vi đúng theo đặc tả, không phải lỗi, cần kèm giải thích cho tester
- d. Deferred – vì sẽ sửa ở phiên bản sau

---

#### Question 23

Ngày ra mắt sản phẩm, ứng dụng bị crash ngay khi người dùng mở màn hình chính, khiến toàn bộ người dùng không thể sử dụng. Khi ghi nhận defect này, phát biểu nào sau đây phân biệt **đúng** hai khái niệm Severity và Priority?

**Select one:**

- a. Severity và Priority là một: đều do tester quyết định dựa trên cảm tính về mức độ nghiêm trọng
- b. Severity do tester đánh giá mức ảnh hưởng kỹ thuật của lỗi (crash toàn app → Severity Cao); Priority phản ánh góc độ kinh doanh và mức độ khẩn cấp, quyết định thứ tự ưu tiên sửa (ngày ra mắt → Priority Cao)
- c. Severity do khách hàng quyết định thứ tự sửa, còn Priority do tester đánh giá ảnh hưởng kỹ thuật
- d. Lỗi này có Severity Cao nên Priority tự động Cao theo — hai khái niệm luôn đi cùng nhau

---

#### Question 24

Một developer nhận được báo cáo defect chỉ ghi: *"Chức năng tìm kiếm bị lỗi. Kết quả sai."* Developer mất nửa ngày mà vẫn không tái hiện được. Theo slide, trường thông tin nào sau đây là **quan trọng nhất** mà một báo cáo defect tốt bắt buộc phải có để developer tái hiện lỗi?

**Select one:**

- a. Tên của tester đã phát hiện ra lỗi
- b. Ảnh chụp màn hình trang chủ của ứng dụng
- c. Mức lương của developer được giao sửa lỗi
- d. Các bước tái hiện chi tiết (steps to reproduce) kèm môi trường, dữ liệu kiểm thử, kết quả thực tế và kết quả mong đợi

---

#### Question 25

Chọn **HAI** trường hợp **nên** tự động hoá kiểm thử.

**Select one or more:**

- a. Kiểm thử tính dễ sử dụng (usability) của một giao diện hoàn toàn mới
- b. Bộ kiểm thử hồi quy (regression) ổn định, được chạy lại mỗi khi có commit mới trên CI
- c. Test case cho một tính năng khuyến mãi chỉ chạy đúng một lần rồi bỏ
- d. Kịch bản cần sinh 10.000 bộ dữ liệu khách hàng khác nhau để kiểm tra nhập liệu hàng loạt
- e. Kiểm thử màn hình đang được designer thay đổi layout mỗi ngày

---

#### Question 26

Một team báo cáo cấu trúc bộ kiểm thử của họ: 80% là kiểm thử ở tầng UI (E2E qua trình duyệt), 15% kiểm thử API, 5% Unit Test. Theo slide, cấu trúc này được gọi là gì và hậu quả chính là gì?

**Select one:**

- a. Ice-cream cone (anti-pattern của Test Pyramid): tháp bị "lộn ngược", test UI chậm, dễ flaky, phát hiện lỗi muộn và chi phí sửa đắt
- b. Test Pyramid chuẩn: càng lên cao càng nhiều test là đúng vì UI gần người dùng nhất
- c. Testing Trophy: tầng Integration chiếm tỉ trọng lớn nhất là hoàn toàn hợp lý
- d. Shift-Left: phát hiện lỗi sớm ngay từ giai đoạn yêu cầu

---

#### Question 27

Một test case trong bộ kiểm thử tự động có hành vi kỳ lạ: chạy riêng lẻ thì luôn Pass, nhưng khi chạy cùng cả bộ test thì thỉnh thoảng Fail ở bước kiểm tra số dư tài khoản. Nguyên nhân **chính** của hiện tượng flaky test này là gì?

**Select one:**

- a. Tester đã viết sai yêu cầu nghiệp vụ nên test không ổn định
- b. Máy tính chạy test quá yếu nên kết quả sai ngẫu nhiên
- c. Test phụ thuộc vào thứ tự chạy và dùng chung dữ liệu với các test khác (ví dụ test trước đã thay đổi số dư), cộng với race condition khi chờ phản hồi bất đồng bộ
- d. Ngôn ngữ lập trình dùng để viết test không phù hợp

---

#### Question 28

Đoạn script kiểm thử có dòng `sleep(5000)` — dừng cứng 5 giây trước khi kiểm tra thông báo "Đặt hàng thành công", vì chờ API xử lý xong. Theo best practice trong slide, nên thay thế `sleep(5000)` bằng cách nào?

**Select one:**

- a. Tăng lên `sleep(10000)` cho chắc chắn, vì API đôi khi chậm hơn 5 giây
- b. Dùng Explicit Wait / Auto-wait: chờ đến khi thỏa một điều kiện cụ thể (ví dụ phần tử thông báo hiển thị và có thể tương tác, hoặc response của API trả về) rồi mới tiếp tục
- c. Xoá luôn dòng chờ vì test tự động chạy đủ nhanh
- d. Chia nhỏ thành nhiều `sleep(1000)` liên tiếp để dễ debug

---

#### Question 29

Team áp dụng Page Object Model với file `CheckoutPage.js` (chứa locators và các hàm thao tác như `nhapDiaChi()`, `bamDatHang()`) và file `checkout.spec.js` (chứa kịch bản test). Khẳng định nào sau đây là **đúng** về cách tổ chức code?

**Select one:**

- a. Nên viết các câu lệnh `expect` (assertion) ngay trong `CheckoutPage.js` để gom logic kiểm chứng một chỗ
- b. Mỗi file spec nên tự định nghĩa lại locator riêng để không phụ thuộc vào Page Object
- c. Page Object nên chứa cả code gọi API backend để test chạy nhanh hơn
- d. Các câu lệnh kiểm chứng kết quả (`expect`/assert) nên nằm ở file test (`checkout.spec.js`); Page Object chỉ chứa locator và hành động/thao tác, không chứa logic kiểm chứng

---

#### Question 30

Chức năng đăng nhập cần kiểm thử với 50 cặp tài khoản/mật khẩu khác nhau (đúng, sai mật khẩu, tài khoản bị khóa...). Thay vì viết 50 script riêng, tester viết **một** script duy nhất đọc dữ liệu từ file CSV và chạy lặp lại 50 lần. Kỹ thuật này được gọi là gì và mục đích chính của nó là gì?

**Select one:**

- a. Data-Driven Testing: tách dữ liệu kiểm thử ra khỏi script để cùng một script chạy được với nhiều bộ dữ liệu, dễ bảo trì và mở rộng
- b. Keyword-Driven Testing: tách từ khóa hành động ra khỏi script
- c. Exploratory Testing: khám phá tự do không cần kịch bản
- d. Mutation Testing: chèn lỗi vào code để đánh giá chất lượng test

---
#### Question 31

Một tester đã đăng nhập thành công và có token hợp lệ, sau đó gọi API `DELETE /api/admin/users/123` (chỉ dành cho tài khoản Admin) bằng tài khoản thường. Server nên trả về mã trạng thái nào, và vì sao?

**Select one:**

- a. 401 Unauthorized – vì tài khoản thường không được phép xoá người dùng
- b. 403 Forbidden – vì request đã được xác thực (có token hợp lệ) nhưng bị từ chối do thiếu quyền truy cập
- c. 404 Not Found – vì tài khoản thường không "thấy" được API của Admin
- d. 200 OK – vì token hợp lệ nên mọi request đều được chấp nhận

---

#### Question 32

Chọn **TẤT CẢ** các cặp "tình huống – mã trạng thái HTTP" là **đúng**.

**Select one or more:**

- a. POST tạo tài nguyên mới thành công → server trả 201
- b. Đăng nhập thành công bắt buộc phải trả 201
- c. Client gửi dữ liệu sai định dạng (ví dụ JSON không hợp lệ) → server trả 400
- d. Lỗi nội bộ phía server (null pointer trong code backend) → server trả 400
- e. Truy vấn một tài nguyên không tồn tại → server trả 404

---

#### Question 33

Form đăng ký trên giao diện web đã có validation đầy đủ: nhập email sai định dạng thì nút "Đăng ký" bị chặn ngay. Vì sao tester vẫn cần kiểm thử API đăng ký một cách riêng biệt?

**Select one:**

- a. Vì kiểm thử API chạy nhanh hơn kiểm thử giao diện nên tiết kiệm thời gian
- b. Vì kiểm thử API không cần môi trường staging
- c. Vì validation ở UI chỉ chặn ở tầng trình bày; kẻ tấn công có thể gọi thẳng API, bỏ qua UI và gửi dữ liệu không hợp lệ — nên server/API bắt buộc phải tự validate
- d. Vì kiểm thử API giúp giao diện hiển thị đẹp hơn

---

#### Question 34

Team muốn áp dụng Shift-Right: sau khi tính năng "gợi ý sản phẩm mới" đã qua kiểm thử trên staging, họ phát hành nó cho **5% người dùng thật**, theo dõi log, metric hiệu năng và phản hồi trong 2 ngày rồi mới mở rộng cho 100%. Cách làm này được gọi là gì?

**Select one:**

- a. Big Bang Release – phát hành đồng loạt cho tất cả người dùng cùng lúc
- b. Kiểm thử hộp đen (Black-box Testing)
- c. Shift-Left – dời kiểm thử sang giai đoạn sớm hơn
- d. Canary Release – phát hành thử cho một nhóm nhỏ người dùng thật và giám sát trong môi trường production trước khi mở rộng

---

#### Question 35

Trong pipeline CI/CD, ở bước chạy Unit Test có 3 test case bị Fail. Theo nguyên tắc **Fail Fast**, pipeline nên xử lý thế nào?

**Select one:**

- a. Dừng pipeline ngay, không build/deploy tiếp; developer sửa lỗi càng sớm càng rẻ
- b. Vẫn deploy lên production rồi sửa lỗi sau, vì đã lỡ chạy pipeline
- c. Tự động bỏ qua các test bị Fail vì "ở môi trường CI test hay Fail oan"
- d. Chờ đến cuối tuần mới xem lại kết quả test cho đỡ gián đoạn công việc

---

#### Question 36

Team cần kiểm thử tự động cho chatbot hỗ trợ khách hàng (dùng LLM): với câu hỏi *"Chính sách đổi trả của shop là gì?"*, chatbot có thể trả lời bằng nhiều cách diễn đạt khác nhau nhưng vẫn đúng ý. Cách kiểm chứng nào sau đây là **phù hợp nhất**?

**Select one:**

- a. So sánh chuỗi tuyệt đối: câu trả lời phải khớp từng ký tự với đáp án mẫu
- b. Kiểm tra ý chính/từ khóa bắt buộc và đánh giá ngữ nghĩa (semantic): câu trả lời phải chứa các thông tin cốt lõi (ví dụ "30 ngày", "còn nguyên tem mác"), cho phép biến thiên văn phong
- c. Chỉ kiểm tra chatbot có trả lời trong 1 giây hay không, nội dung không quan trọng
- d. Không thể kiểm thử tự động chatbot LLM, bắt buộc phải kiểm thủ công 100%

---

#### Question 37

Chọn **BA** ứng dụng **hợp lý** của GenAI trong công việc kiểm thử phần mềm.

**Select one or more:**

- a. Tự động sinh test case từ user story và tài liệu yêu cầu
- b. Gợi ý dữ liệu biên và các trường hợp biên mà tester dễ bỏ sót
- c. Tự quyết định release phần mềm thay cho con người mà không cần review
- d. Tóm tắt, phân loại log lỗi và hỗ trợ soạn thảo báo cáo defect
- e. Đảm bảo phần mềm không còn lỗi 100% sau khi áp dụng AI

---

#### Question 38

Tester dùng GenAI để sinh test case cho chức năng "đăng nhập bằng vân tay". AI trả về một bộ test case rất chi tiết — nhưng trong đó có nhiều case kiểm tra chức năng "đăng nhập bằng nhận diện khuôn mặt", một tính năng **hoàn toàn không tồn tại** trong đặc tả. Hiện tượng này được gọi là gì và tester phải làm gì?

**Select one:**

- a. Overfitting – cứ dùng nguyên bộ test case vì AI luôn đúng
- b. Data leakage – xoá toàn bộ test case và không bao giờ dùng AI nữa
- c. Hallucination (ảo giác) – AI bịa ra test case dựa trên yêu cầu không tồn tại; tester phải rà soát, đối chiếu từng test case với test basis (đặc tả) trước khi sử dụng
- d. Prompt injection – hacker đã tấn công vào hệ thống AI

---

#### Question 39

Một team phát triển ứng dụng web hiện đại quyết định phân bổ ngân sách kiểm thử theo mô hình Testing Trophy của Kent C. Dodds. Điểm khác biệt cốt lõi của Testing Trophy so với Test Pyramid truyền thống là gì?

**Select one:**

- a. Tầng UI/E2E chiếm tỉ trọng lớn nhất vì gần người dùng nhất
- b. Chỉ cần kiểm thử tĩnh (static), không cần các tầng còn lại
- c. Tầng Unit Test bị loại bỏ hoàn toàn vì đã có TypeScript
- d. Tầng Integration chiếm tỉ trọng lớn nhất (thay vì Unit như tháp truyền thống), vì integration test cho độ tin cậy cao với chi phí hợp lý cho ứng dụng web hiện đại

---

#### Question 40

Đặc tả tính điểm thưởng cuối năm của một hệ thống có ba dấu hiệu kiểm thử rõ rệt: (i) tổng điểm tích lũy từ 0–100 với các ngưỡng xếp hạng (Bronze < 50, Silver 50–79, Gold ≥ 80); (ii) mức thưởng cuối cùng phụ thuộc vào **tổ hợp của 3 điều kiện**: là thành viên VIP, thanh toán đúng hạn, không có khiếu nại trong năm; (iii) team đã có sẵn đoạn code tính toán và muốn đo mức độ bao phủ của bộ test lên code đó. Tổ hợp kỹ thuật kiểm thử **phù hợp nhất** cho cả ba dấu hiệu là gì?

**Select one:**

- a. Phân vùng tương đương + Phân tích giá trị biên cho các khoảng điểm (i); Bảng quyết định cho tổ hợp 3 điều kiện (ii); đo bao phủ lệnh/nhánh cho đoạn code (iii)
- b. Chỉ dùng Bảng quyết định cho toàn bộ đặc tả vì nó bao quát được mọi thứ
- c. Chỉ dùng Phân tích giá trị biên cho toàn bộ đặc tả vì có các ngưỡng điểm
- d. Không cần kỹ thuật nào, chỉ cần kiểm thử khám phá tự do là đủ

---

---

## Phần 2: Đáp án & lời giải chi tiết

### Đáp án Đề 1

#### Question 1

Tester Mai phụ trách kiểm thử chức năng "Thanh toán hóa đơn điện" của một app ngân hàng. Cô chỉ chạy các luồng thành công (nhập đúng mã khách hàng, số dư đủ), thấy mọi thứ chạy mượt nên kết luận: "Phần mềm này rất tốt, không cần test thêm."

Cách hiểu nào sau đây là ĐÚNG về kiểm thử phần mềm?

**Select one:**

- a. Kiểm thử là chạy mọi đường đi có thể để chứng minh phần mềm hoàn toàn đúng
- b. Kiểm thử chỉ nhằm xác nhận phần mềm không còn lỗi trước khi giao khách hàng
- c. Kiểm thử là quá trình thực thi chương trình nhằm tìm lỗi và đánh giá các đặc tính, chất lượng của sản phẩm ✅ *(Chính xác. Mục đích cốt lõi của kiểm thử là phát hiện defect và đánh giá chất lượng, không phải chứng minh không còn lỗi.)*
- d. Kiểm thử chỉ là việc chạy lại bộ test case mỗi khi có bản release mới

> Chính xác!
>
> Theo định nghĩa cơ bản (Myers/ISTQB), kiểm thử là quá trình thực thi một chương trình với ý định tìm ra lỗi. Đồng thời nó đánh giá các đặc tính và chất lượng của sản phẩm, cung cấp thông tin cho các bên liên quan để ra quyết định. Đáp án a sai vì không thể kiểm thử mọi đường đi (nguyên lý kiểm thử không cạn kiệt) và kiểm thử không chứng minh được phần mềm "hoàn toàn đúng". Đáp án b sai vì mục tiêu chính là TÌM lỗi chứ không phải xác nhận không còn lỗi – chạy pass không đồng nghĩa hết lỗi. Đáp án d sai vì chạy lại test (regression) chỉ là một hoạt động, không phải toàn bộ kiểm thử; hơn nữa Mai đã bỏ sót test luồng lỗi, giá trị biên, hiệu năng – đó mới là nơi defect thường ẩn nấp.
>
> The correct answer is: Kiểm thử là quá trình thực thi chương trình nhằm tìm lỗi và đánh giá các đặc tính, chất lượng của sản phẩm

---

#### Question 2

Phần mềm quản lý hồ sơ bệnh nhân của một bệnh viện được nghiệm thu vì chạy đúng mọi đặc tả kỹ thuật đã ký: lưu đúng dữ liệu, in đúng báo cáo, phân quyền đúng. Tuy nhiên khi bác sĩ dùng thực tế, họ phát hiện hệ thống thiếu hẳn chức năng cảnh báo dị ứng thuốc của bệnh nhân – điều họ coi là bắt buộc trong nghiệp vụ.

Vấn đề này thuộc về khía cạnh nào?

**Select one:**

- a. Kiểm thử tích hợp – vì các module chưa kết nối tốt với nhau
- b. Validation – kiểm tra "Are we building the right product?" ✅ *(Chính xác. Phần mềm đúng đặc tả nhưng không đáp ứng đúng nhu cầu thực tế của người dùng.)*
- c. Kiểm thử tĩnh – vì lỗi nằm ở tài liệu đặc tả
- d. Verification – kiểm tra "Are we building the product right?"

> Chính xác!
>
> Verification trả lời câu hỏi "Chúng ta có đang xây dựng ĐÚNG sản phẩm?" – tức sản phẩm có khớp đặc tả hay không; còn Validation trả lời "Chúng ta có đang xây dựng đúng sản phẩm (mà người dùng cần)?". Trường hợp này phần mềm đúng đặc tả (verification đạt) nhưng thiếu chức năng nghiệp vụ quan trọng mà bác sĩ cần, nghĩa là sai ở validation – yêu cầu ban đầu đã không phản ánh đúng nhu cầu thực tế. Đáp án a và c không đúng loại vấn đề; đáp án d là ngược lại: verification đã đạt, vấn đề nằm ở validation.
>
> The correct answer is: Validation – kiểm tra "Are we building the right product?"

---

#### Question 3

Xét tình huống ở hệ thống ATM của một ngân hàng:
(i) Nhân viên vận hành nhập sai mức lãi suất khi cấu hình (một hành động của con người);
(ii) Trong mã nguồn, công thức tính lãi bị viết sai, lưu sai kết quả trung gian;
(iii) Khi khách hàng giao dịch, tài khoản bị trừ sai số tiền so với thực tế.

Thứ tự đúng theo chuỗi Error → Defect → Failure là:

**Select one:**

- a. (ii) → (i) → (iii)
- b. (i) → (iii) → (ii)
- c. (iii) → (ii) → (i)
- d. (i) → (ii) → (iii) ✅ *(Chính xác. Hành động sai của con người gây ra khuyết tật trong sản phẩm, khuyết tật đó khi vận hành gây ra sự cố.)*

> Chính xác!
>
> Error là hành động sai của con người – ở đây là nhân viên nhập sai lãi suất (i). Defect (fault/bug) là khuyết tật tồn tại trong sản phẩm công việc – công thức sai trong mã nguồn (ii). Failure là sự sai lệch của phần mềm so với yêu cầu khi vận hành – khách bị trừ sai tiền (iii). Error là nguyên nhân, Defect là hậu quả của Error, Failure là hậu quả của Defect khi nó được kích hoạt. Các đáp án a, b, c đều đảo lộn thứ tự nhân – quả của chuỗi này.
>
> The correct answer is: (i) → (ii) → (iii)

---

#### Question 4

Developer viết hàm tính thuế thu nhập cho nhân sự: theo yêu cầu thuế suất là 0.12, nhưng anh ta dùng nhầm hằng số 0.1 trong mã nguồn, khiến lương thực nhận của nhân viên bị tính sai.

Đoạn mã dùng hằng số sai đó chính là gì?

**Select one:**

- a. Đoạn mã dùng hằng số sai đó chính là Defect ✅ *(Chính xác. Defect là khuyết tật tồn tại trong sản phẩm công việc như mã nguồn.)*
- b. Đó là một Error
- c. Đó là một Failure
- d. Đó là yêu cầu bị thiếu

> Chính xác!
>
> Defect (còn gọi là fault hay bug) là một khuyết tật trong thành phần hoặc hệ thống – có thể tồn tại trong mã nguồn, tài liệu đặc tả, thiết kế. Đoạn code dùng sai hằng số (0.1 thay vì 0.12) là khuyết tật nằm trong mã nguồn nên chính là Defect. Đáp án b sai: Error là hành động sai của con người (việc developer gõ nhầm hằng số mới là Error). Đáp án c sai: Failure chỉ xảy ra khi hệ thống vận hành và cho kết quả sai (lương bị tính sai trên thực tế). Đáp án d sai: yêu cầu đã đầy đủ (thuế suất 0.12), vấn đề là code không tuân theo nó.
>
> The correct answer is: Đoạn mã dùng hằng số sai đó chính là Defect

---

#### Question 5

Sau một đợt kiểm thử chức năng "Đặt vé tàu online", toàn bộ 1000 test case đều Pass. Giám đốc dự án tuyên bố: "1000 test case đều pass, chứng tỏ phần mềm không còn lỗi nào, có thể bàn giao ngay."

Theo Nguyên lý 1 của kiểm thử, tuyên bố này sai ở đâu?

**Select one:**

- a. Sai vì 1000 test case là quá ít, cần ít nhất 5000 test case
- b. Sai vì bộ test case chưa bao gồm kiểm thử hiệu năng
- c. Kiểm thử chỉ cho thấy sự HIỆN DIỆN của lỗi, không bao giờ chứng minh được sự VẮNG MẶT của lỗi ✅ *(Chính xác. Dù pass toàn bộ, vẫn không thể khẳng định phần mềm hết lỗi.)*
- d. Sai vì nên dùng kiểm thử tự động thay vì kiểm thử thủ công

> Chính xác!
>
> Nguyên lý 1 (Testing shows presence of defects) khẳng định: kiểm thử có thể chứng tỏ lỗi đang tồn tại, nhưng không thể chứng tỏ lỗi không tồn tại. Kể cả 1000 test case pass hết, vẫn có thể còn defect ở những đường đi, dữ liệu, môi trường chưa được kiểm thử. Đáp án a sai vì số lượng test case không phải vấn đề cốt lõi – tăng số lượng cũng không chứng minh hết lỗi. Đáp án b sai vì hiệu năng chỉ là một khía cạnh, không phải lý do khiến tuyên bố sai. Đáp án d sai vì tự động hay thủ công đều không thay đổi được bản chất của nguyên lý này.
>
> The correct answer is: Kiểm thử chỉ cho thấy sự HIỆN DIỆN của lỗi, không bao giờ chứng minh được sự VẮNG MẶT của lỗi

---

#### Question 6

Một form "Đăng ký tài khoản khách hàng" có 5 trường dropdown: Tỉnh/Thành, Quận/Huyện, Loại tài khoản, Ngôn ngữ, Kênh giới thiệu. Mỗi trường có đúng 10 giá trị lựa chọn. Tester muốn kiểm thử mọi tổ hợp giá trị có thể của 5 trường này.

Tổng số tổ hợp và kết luận đúng theo Nguyên lý 2 là gì?

**Select one:**

- a. 50 tổ hợp – có thể kiểm thử cạn kiệt dễ dàng
- b. 100.000 tổ hợp – không thể kiểm thử cạn kiệt, phải ưu tiên kiểm thử theo rủi ro ✅ *(Chính xác. 10^5 = 100.000 tổ hợp, vượt quá khả năng kiểm thử hết.)*
- c. 500 tổ hợp – vẫn kiểm thử hết được trong một buổi
- d. 10.000 tổ hợp – chỉ cần thêm tester là kiểm thử hết được

> Chính xác!
>
> Mỗi trường 10 giá trị, 5 trường độc lập nên tổng số tổ hợp là 10 × 10 × 10 × 10 × 10 = 10^5 = 100.000. Nguyên lý 2 (Exhaustive testing is impossible) nói rằng kiểm thử toàn diện mọi tổ hợp đầu vào là bất khả thi, trừ các trường hợp cực kỳ đơn giản. Vì vậy cần ưu tiên nỗ lực kiểm thử vào các vùng rủi ro cao (risk-based testing) thay vì cố test hết. Đáp án a sai phép tính (nhầm cộng thay vì nhân). Đáp án c sai phép tính và kết luận. Đáp án d sai phép tính và cho rằng "thêm người" giải quyết được – vấn đề là tổ hợp tăng theo cấp số nhân, không thể test hết dù thêm bao nhiêu người.
>
> The correct answer is: 100.000 tổ hợp – không thể kiểm thử cạn kiệt, phải ưu tiên kiểm thử theo rủi ro

---

#### Question 7

Trong một dự án xây dựng hệ thống tính điểm thi, ở giai đoạn phân tích yêu cầu, tester phát hiện hai yêu cầu mâu thuẫn nhau về cách làm tròn điểm ưu tiên. Lỗi được sửa ngay trong tài liệu. Một lỗi tương tự ở dự án trước chỉ được phát hiện khi hệ thống đã bước vào giai đoạn kiểm thử, và chi phí sửa gấp nhiều lần.

Phát biểu nào đúng theo nguyên lý "kiểm thử sớm" (early testing)?

**Select one:**

- a. Phát hiện và sửa lỗi càng sớm trong vòng đời phát triển thì chi phí càng thấp ✅ *(Chính xác. Chi phí sửa lỗi tăng mạnh qua các giai đoạn phát triển.)*
- b. Lỗi yêu cầu nên để đến giai đoạn kiểm thử mới phát hiện để có test case cụ thể
- c. Chi phí sửa lỗi ở giai đoạn nào cũng như nhau
- d. Kiểm thử sớm chỉ áp dụng cho kiểm thử đơn vị, không áp dụng cho yêu cầu

> Chính xác!
>
> Nguyên lý kiểm thử sớm (Early testing saves time and money) cho rằng defect nên được phát hiện càng sớm càng tốt, vì chi phí sửa lỗi tăng mạnh theo từng giai đoạn: sửa ở giai đoạn yêu cầu chỉ tốn công sửa tài liệu, còn sửa khi đã code và test thì phải sửa code, sửa test case, chạy lại regression. Đáp án b sai: chờ đến giai đoạn kiểm thử mới phát hiện lỗi yêu cầu là cách làm đắt đỏ. Đáp án c sai hoàn toàn – chi phí sửa lỗi tăng theo thời gian. Đáp án d sai: kiểm thử sớm (shift-left) bao gồm cả review tài liệu yêu cầu, thiết kế, tức kiểm thử tĩnh ngay từ giai đoạn đầu.
>
> The correct answer is: Phát hiện và sửa lỗi càng sớm trong vòng đời phát triển thì chi phí càng thấp

---

#### Question 8

Thống kê sau 2 tháng của một dự án thương mại điện tử: trong tổng số 200 bug được tìm thấy, có tới 150 bug tập trung ở chỉ 3 trong tổng số 12 module của hệ thống (các module Giỏ hàng, Thanh toán, Khuyến mãi).

Theo Nguyên lý 4, hành động hợp lý nhất của test lead là gì?

**Select one:**

- a. Chia đều thời gian kiểm thử cho cả 12 module vì mỗi module đều quan trọng như nhau
- b. Dừng kiểm thử 3 module nhiều bug để tránh "làm khó" developer
- c. Chỉ kiểm thử 3 module đó và bỏ qua 9 module còn lại
- d. Tập trung nỗ lực kiểm thử vào 3 module nhiều bug, vì lỗi có xu hướng tập trung (defect clustering) ✅ *(Chính xác. 75% bug nằm trong 25% module – tuân theo quy luật 80/20.)*

> Chính xác!
>
> Nguyên lý 4 (Defect clustering) chỉ ra rằng một số lượng nhỏ module thường chứa phần lớn defect được phát hiện – đây là biểu hiện của quy luật Pareto 80/20. Ở đây 150/200 = 75% bug nằm trong 3/12 = 25% module, nên tập trung nỗ lực kiểm thử vào 3 module Giỏ hàng, Thanh toán, Khuyến mãi là hợp lý để tìm thêm bug với cùng nguồn lực. Đáp án a sai vì chia đều nguồn lực là bỏ qua thông tin rủi ro. Đáp án b sai ngược hoàn toàn: module nhiều bug càng cần được kiểm thử kỹ, không phải né tránh. Đáp án c sai vì "bỏ qua" 9 module còn lại là cực đoan – vẫn cần kiểm thử chúng ở mức cơ bản (smoke/regression), chỉ là ưu tiên thấp hơn.
>
> The correct answer is: Tập trung nỗ lực kiểm thử vào 3 module nhiều bug, vì lỗi có xu hướng tập trung (defect clustering)

---

#### Question 9

Một team kiểm thử chạy đi chạy lại cùng một bộ 300 test case suốt 6 tháng. Ba tháng gần đây, bộ test này không tìm ra thêm bất kỳ bug mới nào, dù developer vẫn liên tục thêm tính năng mới vào sản phẩm.

Chọn **HAI** phát biểu ĐÚNG về Nguyên lý 5 – Nghịch lý thuốc trừ sâu (Pesticide paradox):

**Select one or more:**

- a. Đây là dấu hiệu tốt, chứng tỏ phần mềm đã hết lỗi nên không cần thay đổi gì
- b. Lặp đi lặp lại cùng một bộ test case sẽ không tìm ra defect mới – cần review và cập nhật bộ test ✅ *(Đúng – bộ test cũ đã "nhờn", phải được rà soát, sửa và bổ sung.)*
- c. Giải pháp là tăng gấp đôi số lần chạy bộ test cũ mỗi tuần
- d. Cần thiết kế thêm test case mới bao phủ các tính năng mới và các kịch bản chưa được kiểm thử ✅ *(Đúng – mở rộng vùng bao phủ để tiếp tục tìm defect mới.)*
- e. Nên xóa bỏ bộ test cũ vì nó không còn giá trị

> Chính xác!
>
> Nguyên lý 5 (Pesticide paradox) nói rằng: nếu lặp đi lặp lại cùng một bộ test case, sau một thời gian chúng sẽ không còn tìm ra defect mới – giống như sâu bọ kháng thuốc trừ sâu. Giải pháp là thường xuyên review, cập nhật bộ test case và bổ sung test case mới cho tính năng mới, kịch bản mới. Đáp án a sai: không tìm ra bug mới không đồng nghĩa hết lỗi, mà do bộ test đã cũ. Đáp án c sai: chạy lại nhiều lần cùng bộ test cũ không tạo ra thông tin mới. Đáp án e sai: bộ test cũ vẫn có giá trị cho kiểm thử hồi quy – kiểm tra tính năng cũ không bị hỏng, chỉ cần bổ sung thêm test mới.
>
> The correct answers are: Lặp đi lặp lại cùng một bộ test case sẽ không tìm ra defect mới – cần review và cập nhật bộ test, Cần thiết kế thêm test case mới bao phủ các tính năng mới và các kịch bản chưa được kiểm thử

---

#### Question 10

Công ty X có hai sản phẩm: (1) phần mềm điều khiển cần cẩu tháp trên công trường xây dựng, (2) ứng dụng đọc truyện tranh giải trí trên điện thoại. Team kiểm thử nhận thấy cách tiếp cận kiểm thử cho hai sản phẩm này hoàn toàn khác nhau: với cần cẩu phải kiểm tra an toàn, thời gian thực, xử lý sự cố phần cứng; với app truyện chỉ cần chú trọng giao diện, tốc độ tải, trải nghiệm người dùng.

Điều này minh họa nguyên lý nào?

**Select one:**

- a. Nguyên lý 6 – Kiểm thử phụ thuộc vào ngữ cảnh (Testing is context dependent) ✅ *(Chính xác. Cách kiểm thử khác nhau tùy loại hệ thống, mức rủi ro và mục đích sử dụng.)*
- b. Nguyên lý 1 – Kiểm thử cho thấy sự hiện diện của lỗi
- c. Nguyên lý 3 – Kiểm thử sớm tiết kiệm thời gian và chi phí
- d. Nguyên lý 7 – Ngụy biện không có lỗi

> Chính xác!
>
> Nguyên lý 6 khẳng định kiểm thử được thực hiện khác nhau tùy theo ngữ cảnh: phần mềm điều khiển cần cẩu (safety-critical, thời gian thực) đòi hỏi kiểm thử an toàn, độ tin cậy cực kỳ nghiêm ngặt; còn app đọc truyện (giải trí) ưu tiên usability và tốc độ tải trang. Không có một "công thức" kiểm thử chung cho mọi hệ thống. Đáp án b, c, d đều là các nguyên lý khác, không liên quan đến sự khác biệt về ngữ cảnh kiểm thử giữa hai loại sản phẩm này.
>
> The correct answer is: Nguyên lý 6 – Kiểm thử phụ thuộc vào ngữ cảnh (Testing is context dependent)

---

#### Question 11

Ứng dụng "Ghi chú giọng nói" của một startup vượt qua 100% test case, không còn bug nào được ghi nhận, chạy đúng toàn bộ đặc tả kỹ thuật đã duyệt. Tuy nhiên sau 3 tháng ra mắt, số người dùng active gần như bằng 0 – khảo sát cho thấy người dùng không hề có nhu cầu ghi chú bằng giọng nói, họ chỉ cần ghi chú văn bản nhanh.

Thất bại này minh họa nguyên lý nào?

**Select one:**

- a. Nguyên lý 2 – Không thể kiểm thử cạn kiệt
- b. Nguyên lý 4 – Lỗi có xu hướng tập trung
- c. Nguyên lý 5 – Nghịch lý thuốc trừ sâu
- d. Nguyên lý 7 – Ngụy biện không có lỗi (Absence-of-errors fallacy) ✅ *(Chính xác. Tìm và sửa nhiều lỗi không đảm bảo hệ thống đáp ứng đúng nhu cầu người dùng.)*

> Chính xác!
>
> Nguyên lý 7 (Absence-of-errors fallacy) cảnh báo: việc tìm và sửa được nhiều defect, đạt 100% test case pass, không đảm bảo hệ thống thành công – nếu hệ thống được xây dựng không đúng nhu cầu, khó sử dụng, hoặc giải quyết sai vấn đề thì nó vẫn là thất bại. Ứng dụng này "sạch bug" nhưng không ai cần, chính là minh họa điển hình. Đáp án a, b, c là các nguyên lý khác: a nói về giới hạn tổ hợp kiểm thử, b về sự tập trung của defect, c về việc bộ test cũ không tìm ra bug mới – đều không giải thích được thất bại này.
>
> The correct answer is: Nguyên lý 7 – Ngụy biện không có lỗi (Absence-of-errors fallacy)

---

#### Question 12

Một công ty phần mềm đang phát triển hệ thống quản lý kho cho khách hàng lớn. Họ cân nhắc các phương án tổ chức kiểm thử sau:
(i) Developer tự kiểm thử module do chính mình viết;
(ii) Một tester thuộc cùng team phát triển, ngồi cùng dự án, kiểm thử sản phẩm;
(iii) Thuê một đội kiểm thử độc lập của công ty thứ ba, không tham gia phát triển, kiểm thử sản phẩm.

Theo mức độ độc lập trong kiểm thử, phương án nào cho tính khách quan CAO NHẤT?

**Select one:**

- a. Phương án (i) vì developer hiểu rõ code của mình nhất
- b. Phương án (ii) vì tester cùng team nắm rõ tiến độ dự án
- c. Phương án (iii) – đội kiểm thử độc lập bên thứ ba ✅ *(Chính xác. Mức độ độc lập càng cao thì tính khách quan càng cao, ít thiên vị xác nhận.)*
- d. Cả ba phương án có tính khách quan như nhau

> Chính xác!
>
> ISTQB phân cấp mức độ độc lập kiểm thử từ thấp đến cao: không kiểm thử độc lập → developer tự test → tester độc lập trong cùng team/tổ chức → đội kiểm thử độc lập từ tổ chức khác (bên thứ ba). Mức độ độc lập càng cao, tester càng ít bị thiên vị xác nhận (confirmation bias – xu hướng chỉ kiểm tra những gì mình tin là đúng), nên càng khách quan và càng dễ tìm ra defect mà tác giả bỏ sót. Đáp án a là mức độc lập thấp nhất – developer dễ bỏ qua lỗi của chính mình. Đáp án b chỉ ở mức trung bình. Đáp án d sai vì mức độ độc lập của ba phương án khác nhau rõ rệt.
>
> The correct answer is: Phương án (iii) – đội kiểm thử độc lập bên thứ ba

---

#### Question 13

Một dự án phần mềm quản lý bệnh viện được phát triển theo V-Model. Test manager khẳng định: "Theo mô hình này, chúng ta không đợi code xong mới bắt đầu kiểm thử."

Phát biểu nào mô tả ĐÚNG đặc trưng của V-Model?

**Select one:**

- a. V-Model là mô hình Agile, mỗi iteration kéo dài 2 tuần
- b. Mỗi giai đoạn phát triển (yêu cầu, thiết kế, coding) đều có cấp kiểm thử tương ứng, và hoạt động kiểm thử (lập kế hoạch, thiết kế test) bắt đầu song song từ sớm ✅ *(Chính xác. Đây là tinh thần shift-left của V-Model.)*
- c. V-Model bỏ qua kiểm thử đơn vị, chỉ thực hiện kiểm thử hệ thống
- d. V-Model yêu cầu khách hàng thay đổi yêu cầu liên tục

> Chính xác!
>
> Đặc trưng cốt lõi của V-Model là sự tương ứng giữa nhánh trái (phát triển: yêu cầu → thiết kế hệ thống → thiết kế chi tiết → coding) và nhánh phải (kiểm thử: kiểm thử chấp nhận → kiểm thử hệ thống → kiểm thử tích hợp → kiểm thử đơn vị). Quan trọng hơn, các hoạt động kiểm thử như lập kế hoạch, phân tích, thiết kế test case bắt đầu ngay từ các giai đoạn đầu, song song với phát triển (shift-left), chứ không đợi đến khi có code. Đáp án a sai: V-Model là mô hình tuần tự, không phải Agile. Đáp án c sai: V-Model bao gồm đầy đủ các cấp kiểm thử. Đáp án d sai: đó là đặc điểm của Agile, còn V-Model yêu cầu yêu cầu tương đối ổn định.
>
> The correct answer is: Mỗi giai đoạn phát triển (yêu cầu, thiết kế, coding) đều có cấp kiểm thử tương ứng, và hoạt động kiểm thử (lập kế hoạch, thiết kế test) bắt đầu song song từ sớm

---

#### Question 14

Một công ty làm phần mềm quản lý nhân sự theo mô hình thác nước (Waterfall). Toàn bộ yêu cầu được chốt và ký duyệt ngay từ đầu dự án. Đến tháng thứ 8 (trong tổng số 10 tháng), khách hàng yêu cầu bổ sung module chấm công bằng khuôn mặt – một thay đổi lớn. Dự án rơi vào khủng hoảng: phải quay lại sửa tài liệu, thiết kế, code gần như từ đầu.

Tình huống này phản ánh nhược điểm nào của Waterfall?

**Select one:**

- a. Waterfall không có giai đoạn kiểm thử
- b. Waterfall không cần tài liệu yêu cầu
- c. Waterfall phát hành sản phẩm quá nhanh khiến khách hàng không kịp dùng
- d. Yêu cầu bị "đóng băng" từ đầu, khách hàng chỉ thấy sản phẩm ở cuối nên khó ứng phó khi yêu cầu thay đổi ✅ *(Chính xác. Mô hình tuần tự kém linh hoạt trước thay đổi.)*

> Chính xác!
>
> Waterfall là mô hình tuần tự: mỗi giai đoạn phải hoàn thành mới sang giai đoạn tiếp theo, yêu cầu được đóng băng (freeze) ngay từ đầu và khách hàng chỉ nhìn thấy sản phẩm hoàn chỉnh ở cuối dự án. Nhược điểm lớn nhất là khi yêu cầu thay đổi giữa chừng (rất phổ biến trong thực tế), chi phí quay lại các giai đoạn trước là rất lớn. Đáp án a sai: Waterfall có giai đoạn kiểm thử riêng. Đáp án b sai: Waterfall rất coi trọng tài liệu. Đáp án c sai ngược: Waterfall giao sản phẩm muộn (cuối dự án), không phải "quá nhanh".
>
> The correct answer is: Yêu cầu bị "đóng băng" từ đầu, khách hàng chỉ thấy sản phẩm ở cuối nên khó ứng phó khi yêu cầu thay đổi

---

#### Question 15

Trong team Scrum phát triển ứng dụng đặt lịch khám bệnh (mỗi sprint 2 tuần), tester Hoa có thói quen đợi developer code xong toàn bộ user story rồi mới bắt đầu kiểm thử vào những ngày cuối sprint.

Theo tinh thần Agile, Hoa nên làm gì mới đúng vai trò tester trong Agile?

**Select one:**

- a. Tham gia họp planning, làm việc chặt chẽ với PO và developer hằng ngày, kiểm thử liên tục ngay trong sprint thay vì đợi cuối sprint ✅ *(Chính xác. Tester là thành viên cross-functional, kiểm thử sớm và liên tục.)*
- b. Tiếp tục đợi cuối sprint vì chỉ khi đó sản phẩm mới ổn định để kiểm thử
- c. Chỉ kiểm thử sau khi sprint kết thúc để không làm gián đoạn developer
- d. Trong Agile không cần tester vì developer tự kiểm thử là đủ

> Chính xác!
>
> Trong Agile, tester là thành viên của team cross-functional: tham gia sprint planning để hiểu user story và tiêu chí chấp nhận, trao đổi hằng ngày với PO/developer, viết và chạy test liên tục ngay khi từng phần tính năng hoàn thành (continuous testing), thay vì đợi "giai đoạn test" cuối sprint. Cách làm của Hoa là tư duy Waterfall núp bóng Agile, khiến lỗi phát hiện muộn và dễ vỡ sprint goal. Đáp án b và c đều duy trì tư duy kiểm thử muộn, đi ngược Agile. Đáp án d sai: Agile vẫn cần tester với góc nhìn độc lập và kỹ năng kiểm thử chuyên sâu mà developer không thay thế được.
>
> The correct answer is: Tham gia họp planning, làm việc chặt chẽ với PO và developer hằng ngày, kiểm thử liên tục ngay trong sprint thay vì đợi cuối sprint

---

#### Question 16

Một team Agile phát triển app ví điện tử với sprint 2 tuần. Họ gặp khó khăn: yêu cầu thay đổi liên tục theo phản hồi thị trường, tài liệu đặc tả rất sơ sài, mỗi sprint đều có khối lượng regression test khổng lồ nhưng thời gian kiểm thử chỉ còn 2–3 ngày cuối sprint.

Chọn **HAI** phát biểu ĐÚNG về thách thức và hướng giải quyết cho kiểm thử trong Agile:

**Select one or more:**

- a. Vì tài liệu sơ sài nên tester không thể kiểm thử được gì trong Agile
- b. Nên quay lại mô hình Waterfall để có tài liệu đầy đủ rồi mới kiểm thử
- c. Yêu cầu thay đổi liên tục và tài liệu nhẹ là thách thức đặc trưng của kiểm thử Agile ✅ *(Đúng – tester phải thích ứng với thay đổi nhanh và thiếu tài liệu chi tiết.)*
- d. Chỉ cần tăng số lượng tester thủ công là giải quyết được bài toán regression mỗi sprint
- e. Cần đẩy mạnh kiểm thử tự động và CI/CD để regression chạy nhanh, kịp trong mỗi sprint ngắn ✅ *(Đúng – automation là "giải pháp sinh tồn" của kiểm thử Agile.)*

> Chính xác!
>
> Thách thức lớn của kiểm thử trong Agile là: yêu cầu thay đổi liên tục, tài liệu ở mức tối thiểu (working software over comprehensive documentation), sprint ngắn nhưng phạm vi regression ngày càng phình to. Hướng giải quyết thực tế là tự động hóa kiểm thử (đặc biệt regression) và tích hợp vào pipeline CI/CD để test chạy nhanh, chạy thường xuyên sau mỗi lần commit. Đáp án a sai: tài liệu sơ sài không có nghĩa không kiểm thử được – Agile dùng kiểm thử khám phá (exploratory testing), trao đổi trực tiếp với PO. Đáp án b sai: quay lại Waterfall không giải quyết được nhu cầu thay đổi nhanh của thị trường. Đáp án d sai: thêm người kiểm thử thủ công không theo kịp tốc độ sprint và dễ sai sót – automation mới là lời giải bền vững.
>
> The correct answers are: Yêu cầu thay đổi liên tục và tài liệu nhẹ là thách thức đặc trưng của kiểm thử Agile, Cần đẩy mạnh kiểm thử tự động và CI/CD để regression chạy nhanh, kịp trong mỗi sprint ngắn

---

#### Question 17

Khi viết unit test cho hàm `tinhLuongThuong(nhanVienId)` nằm ở tầng service thấp nhất, chưa có bất kỳ module nào trong hệ thống gọi đến hàm này. Developer tạo ra một đoạn mã giả lập đóng vai trò "người gọi": nó truyền `nhanVienId` vào hàm và nhận kết quả trả về để kiểm tra.

Đoạn mã giả lập "người gọi" này được gọi là gì?

**Select one:**

- a. Stub – vì nó giả lập dữ liệu trả về
- b. Driver ✅ *(Chính xác. Driver mô phỏng module gọi (caller) ở tầng trên, truyền dữ liệu vào hàm cần kiểm thử.)*
- c. Mock – vì nó kiểm tra tương tác
- d. Fake database

> Chính xác!
>
> Trong kiểm thử đơn vị, Driver là thành phần giả lập "người gọi" (caller): nó gọi đến hàm/module đang được test và truyền dữ liệu đầu vào, dùng khi hàm nằm ở tầng thấp chưa có module thật nào gọi nó. Ngược lại, Stub giả lập "người bị gọi" (callee) ở tầng dưới – cung cấp dữ liệu giả trả về cho hàm đang test khi module phụ thuộc chưa sẵn sàng. Đáp án a sai: stub là giả lập module BỊ GỌI, không phải người gọi. Đáp án c sai: mock dùng để xác minh tương tác (verify hàm có gọi đúng phương thức của đối tượng cộng tác hay không), không phải để đóng vai người gọi. Đáp án d không phải thuật ngữ chuẩn trong ngữ cảnh này.
>
> The correct answer is: Driver

---

#### Question 18

Tester viết unit test cho class `DonHangService`. Class này phụ thuộc vào `EmailGateway` để gửi email xác nhận. Tester không muốn gửi email thật, nhưng CẦN XÁC MINH rằng khi đặt hàng thành công, `DonHangService` có gọi đúng phương thức `guiEmail(diaChi, noiDung)` của `EmailGateway` với đúng tham số, đúng một lần.

Nên dùng kỹ thuật nào?

**Select one:**

- a. Dùng Stub, vì stub cũng giả lập được EmailGateway
- b. Không cần giả lập, cứ gửi email thật cho chắc chắn
- c. Dùng Driver để gọi DonHangService
- d. Dùng Mock – vì mock cho phép verify tương tác (hàm có được gọi đúng cách hay không) ✅ *(Chính xác. Điểm khác biệt cốt lõi của mock so với stub là khả năng xác minh hành vi gọi.)*

> Chính xác!
>
> Sự khác biệt cốt lõi giữa Stub và Mock: stub chỉ cung cấp dữ liệu/câu trả lời giả lập (kiểm tra TRẠNG THÁI – state verification), còn mock ghi nhận và cho phép XÁC MINH TƯƠNG TÁC (behavior verification) – tức kiểm tra xem đối tượng cộng tác có được gọi đúng phương thức, đúng tham số, đúng số lần hay không. Tình huống này yêu cầu verify việc gọi `guiEmail(...)` nên mock là lựa chọn đúng. Đáp án a sai: stub không có khả năng verify tương tác. Đáp án b sai: gửi email thật trong unit test gây chậm, phụ thuộc môi trường ngoài và gây spam – đi ngược nguyên tắc unit test nhanh, độc lập. Đáp án c sai: driver đóng vai "người gọi" hàm cần test, không liên quan đến việc giả lập EmailGateway.
>
> The correct answer is: Dùng Mock – vì mock cho phép verify tương tác (hàm có được gọi đúng cách hay không)

---

#### Question 19

Trong dự án phát triển hệ thống đặt vé máy bay, team lead phân công: "Các bạn developer tự viết và chạy test cho từng hàm, từng class mình vừa code xong, trước khi đẩy code lên để tích hợp."

Phát biểu nào mô tả ĐÚNG về hoạt động kiểm thử này?

**Select one:**

- a. Đây là kiểm thử hệ thống, do tester độc lập thực hiện trên toàn bộ hệ thống
- b. Đây là kiểm thử chấp nhận, do khách hàng thực hiện để nghiệm thu
- c. Đây là kiểm thử đơn vị (Unit Testing): do developer thực hiện, phạm vi là đơn vị nhỏ nhất (hàm/class/module), mục tiêu phát hiện defect sớm ở cấp đơn vị ✅ *(Chính xác. Đúng định nghĩa, đối tượng thực hiện và phạm vi của unit test.)*
- d. Đây là kiểm thử tích hợp, nhằm kiểm tra giao tiếp giữa các module

> Chính xác!
>
> Kiểm thử đơn vị (Unit Testing) kiểm tra đơn vị nhỏ nhất có thể test được của phần mềm (hàm, phương thức, class), thường do chính developer thực hiện ngay sau khi code xong, với mục tiêu phát hiện defect sớm ở cấp độ chi tiết nhất. Mô tả trong tình huống khớp hoàn toàn: developer tự test từng hàm/class mình viết trước khi tích hợp. Đáp án a sai: kiểm thử hệ thống test toàn bộ hệ thống đã tích hợp, do tester thực hiện. Đáp án b sai: kiểm thử chấp nhận do khách hàng/người dùng thực hiện để quyết định nghiệm thu. Đáp án d sai: kiểm thử tích hợp kiểm tra tương tác GIỮA các module, không phải từng hàm riêng lẻ.
>
> The correct answer is: Đây là kiểm thử đơn vị (Unit Testing): do developer thực hiện, phạm vi là đơn vị nhỏ nhất (hàm/class/module), mục tiêu phát hiện defect sớm ở cấp đơn vị

---

#### Question 20

Team có 6 module của hệ thống quản lý kho đã code xong. Test lead quyết định: gộp cả 6 module lại với nhau một lần rồi mới bắt đầu kiểm thử tích hợp. Kết quả: test fail với hàng loạt lỗi, team mất 3 ngày vẫn chưa xác định được lỗi nằm ở module nào hay ở chỗ giao tiếp giữa các module.

Vấn đề của cách làm này (Big Bang) là gì?

**Select one:**

- a. Gộp tất cả module cùng lúc khiến khi test fail rất khó khoanh vùng, xác định nguyên nhân lỗi ✅ *(Chính xác. Đây là nhược điểm lớn nhất của tích hợp Big Bang.)*
- b. Big Bang luôn cho kết quả test pass nhanh hơn tích hợp tăng dần
- c. Big Bang giúp phát hiện lỗi giao tiếp giữa các module tốt hơn tích hợp tăng dần
- d. Vấn đề là team có quá ít module, nên tăng lên 10 module rồi gộp

> Chính xác!
>
> Tích hợp Big Bang gộp toàn bộ module lại một lúc rồi mới test: khi test fail, lỗi có thể nằm ở bất kỳ module nào hoặc ở bất kỳ điểm giao tiếp nào, việc cô lập và xác định nguyên nhân cực kỳ khó khăn và tốn thời gian – đúng như team đã mất 3 ngày. Cách tiếp cận tích hợp tăng dần (top-down, bottom-up) tích hợp từng phần, nên khi fail thì phạm vi nghi ngờ hẹp, dễ khoanh vùng hơn. Đáp án b sai: big bang không pass nhanh hơn, ngược lại debug rất lâu. Đáp án c sai ngược: tích hợp tăng dần mới giúp phát hiện và định vị lỗi giao tiếp hiệu quả hơn. Đáp án d sai: tăng số module chỉ làm vấn đề khoanh vùng lỗi trầm trọng thêm.
>
> The correct answer is: Gộp tất cả module cùng lúc khiến khi test fail rất khó khoanh vùng, xác định nguyên nhân lỗi

---

#### Question 21

Hệ thống quản lý nhà thuốc đã tích hợp xong toàn bộ các module: Kho thuốc, Bán hàng, Hóa đơn và Báo cáo tồn kho. Team triển khai toàn bộ hệ thống lên môi trường UAT được cấu hình giống hệt Production, rồi tester đi trọn một luồng end-to-end theo đúng đặc tả yêu cầu: nhập kho một lô thuốc mới → bán lẻ cho khách → xuất hóa đơn → kiểm tra báo cáo tồn kho tự động trừ đúng số lượng.

**Select one:**

- a. Kiểm thử tích hợp – vì các module đã được gộp lại để kiểm tra sự giao tiếp giữa chúng
- b. Kiểm thử đơn vị – vì mỗi bước trong luồng được kiểm tra riêng lẻ
- c. Kiểm thử hệ thống (System Testing) – kiểm tra toàn bộ hệ thống đã lắp ráp hoàn chỉnh, chạy end-to-end theo yêu cầu trên môi trường giống Production ✅ *(Chính xác. System Testing kiểm tra toàn hệ thống tích hợp hoàn chỉnh dưới góc nhìn end-to-end, khác với Integration Testing chỉ kiểm tra giao tiếp giữa các module.)*
- d. Kiểm thử chấp nhận – vì đã mô phỏng đúng hành vi của người dùng cuối

> Chính xác!
>
> Kiểm thử tích hợp chỉ kiểm tra sự giao tiếp, luồng dữ liệu giữa các module riêng lẻ, trong khi ở đây toàn bộ hệ thống đã được lắp ráp hoàn chỉnh và kiểm tra trọn luồng nghiệp vụ trên môi trường giống Production – đó chính là System Testing. Đáp án b sai vì không còn kiểm tra từng đơn vị riêng lẻ; đáp án d sai vì chưa có sự tham gia/xác nhận của khách hàng hay người dùng thật.
>
> The correct answer is: Kiểm thử hệ thống (System Testing) – kiểm tra toàn bộ hệ thống đã lắp ráp hoàn chỉnh, chạy end-to-end theo yêu cầu trên môi trường giống Production

---

#### Question 22

Công ty phát triển game mobile mở đợt chơi thử sớm: 500 game thủ đăng ký tự nguyện từ cộng đồng bên ngoài công ty được tải bản game về chơi trên chính điện thoại cá nhân của họ trong 2 tuần, trước ngày phát hành chính thức, để công ty thu thập phản hồi về độ ổn định và trải nghiệm chơi.

**Select one:**

- a. Alpha Testing – vì đây là vòng kiểm thử diễn ra trước khi phát hành chính thức
- b. Kiểm thử hệ thống – vì game được kiểm tra như một hệ thống hoàn chỉnh
- c. UAT tại site của khách hàng – vì có người dùng thật tham gia đánh giá
- d. Beta Testing – phát hành cho nhóm người dùng thật bên ngoài công ty dùng thử trong môi trường thật của họ trước khi ra mắt chính thức ✅ *(Chính xác. Beta Testing do người dùng thật bên ngoài thực hiện trong môi trường của chính họ; Alpha Testing do nội bộ thực hiện tại site của nhà phát triển.)*

> Chính xác!
>
> Điểm phân biệt cốt lõi: Alpha Testing được thực hiện bởi đội ngũ nội bộ tại site của nhà phát triển, còn Beta Testing mở cho người dùng thật bên ngoài sử dụng trong môi trường thật của họ. Ở đây 500 game thủ là người ngoài công ty, chơi trên điện thoại cá nhân – đúng bản chất Beta Testing. Đáp án c sai vì UAT thường diễn ra có kiểm soát tại môi trường của khách hàng cụ thể, không phải phát hành rộng rãi cho cộng đồng.
>
> The correct answer is: Beta Testing – phát hành cho nhóm người dùng thật bên ngoài công ty dùng thử trong môi trường thật của họ trước khi ra mắt chính thức

---

#### Question 23

Chọn **CÁC** loại kiểm thử thuộc nhóm **Non-functional** (phi chức năng). Biết rằng Functional trả lời "hệ thống **làm cái gì**", còn Non-functional trả lời "hệ thống **làm tốt thế nào**".

**Select one or more:**

- a. Đo thời gian phản hồi của trang đặt vé khi có 5.000 người truy cập cùng lúc ✅ *(Đúng – kiểm thử hiệu năng, thuộc Non-functional.)*
- b. Kiểm tra hệ thống có chặn được truy vấn SQL Injection vào ô tìm kiếm hay không ✅ *(Đúng – kiểm thử bảo mật, thuộc Non-functional.)*
- c. Kiểm tra đăng nhập thành công khi nhập đúng tên tài khoản và mật khẩu
- d. Kiểm tra hóa đơn tính đúng tổng tiền khi khách áp dụng mã giảm giá
- e. Kiểm tra công thức tính tiền điện theo bậc thang có cho kết quả đúng không

> Chính xác!
>
> Non-functional kiểm tra "làm tốt thế nào": hiệu năng (a) và bảo mật (b). Đáp án c, d và e kiểm tra tính đúng đắn của chức năng cụ thể (đăng nhập, tính tổng hóa đơn, tính tiền điện) – đó là Functional Testing, trả lời "hệ thống làm cái gì".
>
> The correct answers are: Đo thời gian phản hồi của trang đặt vé khi có 5.000 người truy cập cùng lúc, Kiểm tra hệ thống có chặn được truy vấn SQL Injection vào ô tìm kiếm hay không

---

#### Question 24

Tester Hùng được giao kiểm thử chức năng "Đổi mật khẩu". Anh nhận tài liệu đặc tả chi tiết: mật khẩu mới tối thiểu 8 ký tự, phải chứa cả chữ và số, xác nhận lại phải trùng khớp. Hùng thiết kế toàn bộ test case chỉ dựa trên đặc tả này – nhập các tổ hợp mật khẩu hợp lệ/không hợp lệ rồi so sánh thông báo hệ thống với kết quả mong đợi trong tài liệu – mà **không hề mở mã nguồn** để xem hàm đổi mật khẩu được cài đặt ra sao. Cách tiếp cận này là gì?

**Select one:**

- a. Kiểm thử hộp đen (Black-box) – tester không xem code, chỉ dựa vào đặc tả đầu vào/đầu ra để thiết kế test case ✅ *(Chính xác. Black-box dựa trên tài liệu yêu cầu/đặc tả, kiểm tra "hệ thống làm gì" mà không quan tâm cấu trúc bên trong.)*
- b. Kiểm thử hộp trắng (White-box) – vì đã đọc kỹ tài liệu đặc tả chi tiết
- c. Kiểm thử tĩnh – vì không thực thi mã nguồn trong quá trình thiết kế
- d. Kiểm thử hộp trắng – vì test case bao phủ được mọi tổ hợp mật khẩu

> Chính xác!
>
> Điểm mấu chốt của Black-box là tester không hề xem cấu trúc code bên trong, mọi test case đều xuất phát từ đặc tả đầu vào/đầu ra. White-box thì ngược lại: phải dựa vào cấu trúc code (nhánh if-else, vòng lặp) để thiết kế test case như phủ lệnh hay phủ nhánh. Đáp án c sai vì các test case vẫn được thực thi trên hệ thống đang chạy, chỉ là khâu thiết kế không dựa vào code.
>
> The correct answer is: Kiểm thử hộp đen (Black-box) – tester không xem code, chỉ dựa vào đặc tả đầu vào/đầu ra để thiết kế test case

---

#### Question 25

Developer vừa sửa xong bug "hệ thống không gửi email xác nhận đơn hàng khi địa chỉ email chứa ký tự '+' (ví dụ: user+shop@gmail.com)". Tester chạy lại **đúng test case đã phát hiện ra bug này** để xác nhận email xác nhận nay đã được gửi đi bình thường. Sau đó, tester chạy thêm toàn bộ test case của module "Thông báo" và "Đăng ký tài khoản" để đảm bảo bản sửa lỗi không vô tình làm hỏng chức năng khác. Hai hoạt động này lần lượt là gì?

**Select one:**

- a. Cả hai hoạt động đều là Regression Testing
- b. Lần 1 là Confirmation Testing (Re-test) – chạy lại test case đã fail để xác nhận lỗi đã được sửa; lần 2 là Regression Testing – chạy bộ test cũ để đảm bảo vùng không thay đổi vẫn hoạt động đúng ✅ *(Chính xác. Confirmation kiểm tra "lỗi đã sửa chưa", Regression kiểm tra "sửa chỗ này có làm hỏng chỗ khác không".)*
- c. Lần 1 là Regression Testing, lần 2 là Confirmation Testing
- d. Cả hai hoạt động đều là Confirmation Testing

> Chính xác!
>
> Confirmation Testing (retest) luôn gắn với defect vừa sửa: chạy lại chính test case đã phát hiện lỗi để xác nhận nó đã hết. Regression Testing chạy lại các test case của những vùng chức năng không bị thay đổi để phát hiện tác dụng phụ của bản sửa. Đáp án c đảo ngược thứ tự; đáp án a và d gộp hai mục đích khác nhau thành một.
>
> The correct answer is: Lần 1 là Confirmation Testing (Re-test) – chạy lại test case đã fail để xác nhận lỗi đã được sửa; lần 2 là Regression Testing – chạy bộ test cũ để đảm bảo vùng không thay đổi vẫn hoạt động đúng

---

#### Question 26

Hệ thống tính lương đã vận hành ổn định trên Production được 3 năm. Nay Nhà nước ban hành biểu thuế thu nhập cá nhân mới có hiệu lực từ tháng tới, buộc công ty phải sửa lại công thức tính thuế trong hệ thống. Trước khi developer bắt tay vào sửa code, test lead yêu cầu phân tích xem thay đổi này ảnh hưởng đến những module, test case và dữ liệu nào. Tình huống này thuộc loại kiểm thử nào?

**Select one:**

- a. Không cần kiểm thử vì chỉ thay đổi công thức tính thuế, không thêm tính năng mới
- b. Kiểm thử chấp nhận – vì thay đổi xuất phát từ yêu cầu của cơ quan nhà nước
- c. Kiểm thử hệ thống lần đầu – vì phải kiểm tra lại toàn bộ hệ thống từ đầu
- d. Kiểm thử bảo trì (Maintenance Testing) – hệ thống đang vận hành phải thay đổi do quy định pháp luật mới, và bắt buộc phải phân tích tác động (Impact Analysis) trước khi sửa để xác định phạm vi kiểm thử hồi quy ✅ *(Chính xác. Maintenance Testing áp dụng khi hệ thống đang vận hành có sự thay đổi: sửa lỗi, nâng cấp môi trường, hoặc thay đổi do luật/quy định mới.)*

> Chính xác!
>
> Maintenance Testing không chỉ dành cho việc sửa bug mà còn cho mọi thay đổi trên hệ thống đang vận hành, gồm cả thay đổi do pháp luật. Phân tích tác động (Impact Analysis) là bước bắt buộc để biết thay đổi lan tới đâu, từ đó quyết định phạm vi regression test. Đáp án a sai vì mọi thay đổi trên production đều tiềm ẩn rủi ro; đáp án b và c nhầm lẫn về bản chất của hoạt động.
>
> The correct answer is: Kiểm thử bảo trì (Maintenance Testing) – hệ thống đang vận hành phải thay đổi do quy định pháp luật mới, và bắt buộc phải phân tích tác động (Impact Analysis) trước khi sửa để xác định phạm vi kiểm thử hồi quy

---

#### Question 27

Hoạt động nào sau đây là **kiểm thử tĩnh (Static Testing)**?

**Select one:**

- a. Ba tester ngồi lại với nhau, đọc kỹ tài liệu thiết kế chi tiết của module "Đặt sân bóng", đối chiếu từng mục với tài liệu yêu cầu và ghi lại các điểm mâu thuẫn – mà không chạy bất kỳ dòng code nào ✅ *(Chính xác. Kiểm thử tĩnh là xem xét, rà soát tài liệu hoặc phân tích mã nguồn mà KHÔNG thực thi chương trình.)*
- b. Chạy các test case đặt sân trên môi trường Staging để kiểm tra luồng nghiệp vụ
- c. Dùng JMeter bắn 1.000 request đồng thời vào hệ thống để đo thời gian phản hồi
- d. Mời người dùng thật dùng thử ứng dụng và thu thập phản hồi của họ

> Chính xác!
>
> Đặc điểm nhận diện kiểm thử tĩnh: không thực thi chương trình – chỉ đọc, rà soát tài liệu (review) hoặc dùng công cụ quét mã nguồn (static analysis). Các đáp án b, c, d đều phải chạy chương trình/hệ thống thật nên thuộc kiểm thử động (Dynamic Testing).
>
> The correct answer is: Ba tester ngồi lại với nhau, đọc kỹ tài liệu thiết kế chi tiết của module "Đặt sân bóng", đối chiếu từng mục với tài liệu yêu cầu và ghi lại các điểm mâu thuẫn – mà không chạy bất kỳ dòng code nào

---

#### Question 28

Developer Lan vừa viết xong tài liệu đặc tả API cho module thanh toán. Cô gửi link tài liệu cho anh đồng nghiệp ngồi cùng phòng, nhắn: "Anh rảnh thì liếc qua giúp em 15 phút xem có chỗ nào vô lý không nhé". Không có lịch họp chính thức, không checklist, không ai ghi biên bản. Theo phân loại review, đây là loại nào?

**Select one:**

- a. Inspection – vì có người khác rà soát tài liệu
- b. Walkthrough – vì đồng nghiệp sẽ đi qua từng phần của tài liệu
- c. Informal Review – đồng nghiệp xem nhanh tài liệu, không theo quy trình chính thức, không ghi biên bản ✅ *(Chính xác. Informal Review là hình thức review không chính thức: buddy check, pair review, xem nhanh theo yêu cầu cá nhân.)*
- d. Technical Review – vì tài liệu đặc tả API mang tính kỹ thuật

> Chính xác!
>
> Dấu hiệu của Informal Review: không có quy trình chính thức, không có vai trò được phân công rõ ràng, không checklist, không biên bản – chỉ là nhờ xem giúp nhanh. Inspection và Technical Review đều là review chính thức với quy trình chặt chẽ; Walkthrough thì tác giả là người dẫn dắt cả nhóm đi qua tài liệu.
>
> The correct answer is: Informal Review – đồng nghiệp xem nhanh tài liệu, không theo quy trình chính thức, không ghi biên bản

---

#### Question 29

Đối với module lõi xử lý giao dịch chuyển tiền quốc tế – phần rủi ro cao nhất của hệ thống ngân hàng – công ty tổ chức một buổi review **khắt khe nhất**: có Moderator điều phối, các reviewer đọc trước tài liệu và rà soát từng mục theo **checklist tiêu chuẩn**, mọi lỗi phát hiện đều được ghi lại kèm **số liệu thống kê (metrics)**, và tác giả của tài liệu **không được** làm người điều phối buổi review. Đây là loại hình review nào?

**Select one:**

- a. Walkthrough – vì cả nhóm cùng đi qua từng phần của tài liệu
- b. Inspection – loại review chính thức và khắt khe nhất: có Moderator, checklist chuẩn, ghi metrics, tác giả không được làm review leader ✅ *(Chính xác. Inspection là hình thức review chính thức nghiêm ngặt nhất với đầy đủ vai trò, checklist và số liệu đo lường.)*
- c. Informal Review – vì chỉ tập trung vào một module duy nhất
- d. Technical Review – vì có các chuyên gia đánh giá tính khả thi của giải pháp

> Chính xác!
>
> Bộ dấu hiệu đặc trưng của Inspection: quy trình chính thức khắt khe nhất, Moderator điều phối, reviewer chuẩn bị trước theo checklist, ghi nhận metrics, và nguyên tắc "tác giả không được làm review leader" để đảm bảo tính khách quan. Walkthrough thì chính tác giả dẫn dắt; Technical Review tập trung đánh giá tính khả thi kỹ thuật của giải pháp bởi chuyên gia.
>
> The correct answer is: Inspection – loại review chính thức và khắt khe nhất: có Moderator, checklist chuẩn, ghi metrics, tác giả không được làm review leader

---

#### Question 30

Trong một buổi Inspection chính thức, ai là người chịu trách nhiệm **điều phối buổi review** (lên lịch, dẫn dắt buổi họp, đảm bảo mọi người tuân thủ đúng quy trình)?

**Select one:**

- a. Author (Tác giả) – vì là người hiểu rõ nhất sản phẩm được review
- b. Manager – vì là người có quyền quyết định phân bổ thời gian và nhân sự
- c. Tester – vì tester là người chịu trách nhiệm chính về chất lượng
- d. Moderator / Review Leader – người điều phối buổi review, đảm bảo đúng tiến độ và hiệu quả ✅ *(Chính xác. Moderator/Review Leader dẫn dắt buổi review; riêng trong Inspection, tác giả KHÔNG được đảm nhận vai trò này để tránh thiên vị.)*

> Chính xác!
>
> Moderator (Review Leader) là vai trò chuyên trách điều phối: lên kế hoạch, dẫn dắt buổi họp, giữ đúng quy trình và tiến độ. Đáp án a sai vì trong Inspection, tác giả bị cấm làm review leader cho chính sản phẩm của mình – đây là nguyên tắc đảm bảo tính khách quan. Đáp án b và c không phải vai trò điều phối theo chuẩn quy trình review.
>
> The correct answer is: Moderator / Review Leader – người điều phối buổi review, đảm bảo đúng tiến độ và hiệu quả

---

#### Question 31

Team chạy SonarQube quét toàn bộ mã nguồn, kết quả báo "0 lỗi – code sạch 100%". Tuy nhiên khi demo cho khách hàng, khách phát hiện chức năng "xuất báo cáo theo quý" ghi rõ trong hợp đồng vẫn **chưa hề được cài đặt**, và sau khi release, một số lỗi chỉ xuất hiện khi hệ thống chạy với dữ liệu thật trên production. Điều nào sau đây công cụ phân tích tĩnh **KHÔNG** làm được?

**Select one:**

- a. Phát hiện các yêu cầu bị thiếu/chưa được cài đặt và các lỗi chỉ bộc lộ khi chương trình thực thi với dữ liệu thật ✅ *(Chính xác. Phân tích tĩnh chỉ quét mã nguồn mà không chạy chương trình, nên không thể biết yêu cầu nào chưa được code, cũng không thấy được lỗi runtime chỉ xuất hiện với dữ liệu thật.)*
- b. Phát hiện biến được khai báo và gán giá trị nhưng không bao giờ sử dụng
- c. Phát hiện đoạn code nằm sau lệnh return nên không bao giờ được thực thi
- d. Phát hiện mật khẩu và API key bị ghi cứng (hardcode) trong mã nguồn

> Chính xác!
>
> Công cụ phân tích tĩnh rất mạnh trong việc quét code mà không cần chạy: biến rác, unreachable code, hardcode thông tin nhạy cảm (đáp án b, c, d đều làm được). Nhưng vì không thực thi chương trình, nó không thể biết có yêu cầu nào trong đặc tả chưa được cài đặt thành code, cũng không phát hiện được các lỗi runtime chỉ lộ ra với dữ liệu thật – đó là hạn chế cố hữu và là lý do kiểm thử động không thể bị thay thế.
>
> The correct answer is: Phát hiện các yêu cầu bị thiếu/chưa được cài đặt và các lỗi chỉ bộc lộ khi chương trình thực thi với dữ liệu thật

---

#### Question 32

Chọn **HAI** phát biểu **đúng** về lợi ích của kiểm thử tĩnh (Static Testing).

**Select one or more:**

- a. Phát hiện Defect ngay trong tài liệu yêu cầu và thiết kế, từ trước khi một dòng code nào được viết – càng sửa sớm càng rẻ ✅ *(Đúng – giá trị Shift-Left: sửa một dòng trong tài liệu rẻ hơn hàng trăm lần so với sửa code, build lại và test lại.)*
- b. Giúp chương trình chạy nhanh hơn khi thực thi vì code đã được rà soát kỹ
- c. Phát hiện sớm các yêu cầu mâu thuẫn, mơ hồ hoặc thiếu sót trước khi chúng biến thành bug trong code ✅ *(Đúng – review tài liệu bắt được lỗi đặc tả từ gốc, ngăn ngừa defect thay vì chỉ phát hiện sau.)*
- d. Thay thế hoàn toàn kiểm thử động, giúp team không cần chạy test case nữa
- e. Tự động sửa mọi lỗi trong mã nguồn mà không cần developer can thiệp

> Chính xác!
>
> Hai lợi ích cốt lõi của kiểm thử tĩnh là phát hiện lỗi cực sớm (ngay ở tài liệu, trước khi code – đáp án a) và bắt được các vấn đề của yêu cầu như mâu thuẫn, mơ hồ (đáp án c), từ đó tiết kiệm chi phí sửa lỗi khổng lồ. Đáp án b sai vì review không làm chương trình chạy nhanh hơn; đáp án d và e sai vì kiểm thử tĩnh không thể thay thế kiểm thử động và không tự sửa lỗi.
>
> The correct answers are: Phát hiện Defect ngay trong tài liệu yêu cầu và thiết kế, từ trước khi một dòng code nào được viết – càng sửa sớm càng rẻ, Phát hiện sớm các yêu cầu mâu thuẫn, mơ hồ hoặc thiếu sót trước khi chúng biến thành bug trong code

---

#### Question 33

Trong quy trình kiểm thử cơ bản (Fundamental Test Process), hoạt động nào trả lời cho câu hỏi kiểm thử **CÁI GÌ** – tức là phân tích test basis (tài liệu yêu cầu, thiết kế) để xác định các test conditions cần kiểm tra?

**Select one:**

- a. Test Planning – lập kế hoạch kiểm thử, xác định lịch trình và nguồn lực
- b. Test Analysis – phân tích test basis để xác định CÁI GÌ cần kiểm thử (test conditions) ✅ *(Chính xác. Test Analysis trả lời "kiểm thử cái gì" bằng cách rút ra test conditions từ tài liệu yêu cầu/thiết kế.)*
- c. Test Implementation – viết test case chi tiết và chuẩn bị dữ liệu kiểm thử
- d. Test Execution – chạy các test case và ghi nhận kết quả Pass/Fail

> Chính xác!
>
> Mỗi hoạt động trong quy trình trả lời một câu hỏi khác nhau: Planning trả lời "khi nào, ai làm, tốn bao nhiêu"; Analysis trả lời "kiểm thử CÁI GÌ" (test conditions từ test basis); Design/Implementation trả lời "kiểm thử NHƯ THẾ NÀO" (test case chi tiết); Execution là chạy và ghi nhận kết quả. Đáp án c và d thuộc về các bước sau, không phải bước xác định đối tượng kiểm thử.
>
> The correct answer is: Test Analysis – phân tích test basis để xác định CÁI GÌ cần kiểm thử (test conditions)

---

#### Question 34

Điều kiện nào sau đây là **Entry Criteria** – điều kiện cần thỏa mãn để được **BẮT ĐẦU** thực hiện kiểm thử?

**Select one:**

- a. 100% test case đã được thực thi và không còn defect nào ở trạng thái mở
- b. Các tester đã được nghỉ ngơi đầy đủ để đảm bảo sự tỉnh táo khi kiểm thử
- c. Môi trường kiểm thử đã sẵn sàng, dữ liệu kiểm thử đã được chuẩn bị đầy đủ, và bản build đã vượt qua smoke test ✅ *(Chính xác. Entry Criteria là điều kiện để bắt đầu test: môi trường, dữ liệu, tài liệu yêu cầu đã duyệt và bản build đủ ổn định để test được.)*
- d. Developer vừa commit một loạt code mới lên nhánh kiểm thử

> Chính xác!
>
> Entry Criteria trả lời "khi nào thì được bắt đầu kiểm thử": môi trường sẵn sàng, dữ liệu test đã chuẩn bị, yêu cầu đã được duyệt và bản build vượt qua smoke test (chứng tỏ đủ ổn định). Đáp án a là Exit Criteria (điều kiện kết thúc); đáp án d ngược lại – code mới commit chưa ổn định thì chưa đủ điều kiện bắt đầu.
>
> The correct answer is: Môi trường kiểm thử đã sẵn sàng, dữ liệu kiểm thử đã được chuẩn bị đầy đủ, và bản build đã vượt qua smoke test

---

#### Question 35

Điều nào sau đây là **Exit Criteria** hợp lệ – điều kiện để **KẾT THÚC** hoạt động kiểm thử?

**Select one:**

- a. Tester cảm thấy đã mệt nên quyết định dừng kiểm thử
- b. Dự án hết ngân sách nên dừng kiểm thử ngay lập tức mà không cần báo cáo
- c. Developer vừa bàn giao thêm một tính năng mới cần kiểm thử bổ sung
- d. 100% test case ưu tiên cao đã được chạy, không còn lỗi Critical/Blocker nào ở trạng thái mở, và độ bao phủ kiểm thử đạt ngưỡng yêu cầu ✅ *(Chính xác. Exit Criteria là các điều kiện khách quan, đo lường được để quyết định dừng test: test đã chạy đủ, không còn lỗi nghiêm trọng mở, đạt độ bao phủ.)*

> Chính xác!
>
> Exit Criteria phải là các tiêu chí khách quan và đo lường được, được thống nhất từ trước trong Test Plan. Đáp án a và b là lý do chủ quan/cảm tính, không phải tiêu chí hợp lệ – hết ngân sách mà dừng không báo cáo còn vi phạm nguyên tắc quản lý. Đáp án c là tín hiệu cần kiểm thử tiếp, không phải điều kiện kết thúc.
>
> The correct answer is: 100% test case ưu tiên cao đã được chạy, không còn lỗi Critical/Blocker nào ở trạng thái mở, và độ bao phủ kiểm thử đạt ngưỡng yêu cầu

---

#### Question 36

Trong Test Plan, mục **"Test Approach" (Cách tiếp cận kiểm thử)** mô tả điều gì?

**Select one:**

- a. Các cấp độ và loại hình kiểm thử sẽ áp dụng, kỹ thuật thiết kế test case và mức độ tự động hóa ✅ *(Chính xác. Test Approach mô tả chiến lược/cách tiếp cận: test ở cấp độ nào, loại nào, bằng kỹ thuật gì, tự động hóa đến đâu.)*
- b. Phạm vi kiểm thử: tính năng nào sẽ được kiểm thử và tính năng nào sẽ không được kiểm thử
- c. Lịch trình kiểm thử: các mốc thời gian bắt đầu và kết thúc từng giai đoạn
- d. Nguồn lực kiểm thử: số lượng tester, vai trò và cấu hình môi trường

> Chính xác!
>
> Mỗi mục trong Test Plan trả lời một câu hỏi riêng: Scope trả lời "kiểm thử cái gì và loại trừ cái gì" (đáp án b); Schedule trả lời "khi nào" (đáp án c); Resources trả lời "ai làm, bằng công cụ/môi trường gì" (đáp án d). Test Approach trả lời "tiếp cận như thế nào": cấp độ test, loại test, kỹ thuật thiết kế và chiến lược tự động hóa.
>
> The correct answer is: Các cấp độ và loại hình kiểm thử sẽ áp dụng, kỹ thuật thiết kế test case và mức độ tự động hóa

---

#### Question 37

Ma trận truy vết yêu cầu (RTM) được nói là hỗ trợ **truy vết hai chiều (bidirectional traceability)**. Điều này có nghĩa là gì?

**Select one:**

- a. Chỉ truy vết được một chiều từ yêu cầu xuống các test case
- b. Vừa truy ngược (backward) từ một Test Case về yêu cầu mà nó kiểm tra, vừa truy xuôi (forward) từ một yêu cầu ra tất cả Test Case liên quan ✅ *(Chính xác. Truy vết hai chiều cho phép đi cả hai hướng: từ test case tìm ra yêu cầu gốc, và từ yêu cầu tìm ra mọi test case bao phủ nó.)*
- c. Truy vết sự thay đổi giữa hai bản build liên tiếp của hệ thống
- d. Truy vết mối liên hệ giữa test case kiểm thử thủ công và test case tự động

> Chính xác!
>
> Truy vết hai chiều gồm: backward – từ Test Case truy ngược về yêu cầu (để biết test case này kiểm tra yêu cầu nào, phát hiện test case thừa); forward – từ yêu cầu truy xuôi ra Test Case (để biết yêu cầu đã được bao phủ chưa, phát hiện lỗ hổng bao phủ). Đáp án a mới chỉ là một chiều; đáp án c và d không phải khái niệm truy vết yêu cầu.
>
> The correct answer is: Vừa truy ngược (backward) từ một Test Case về yêu cầu mà nó kiểm tra, vừa truy xuôi (forward) từ một yêu cầu ra tất cả Test Case liên quan

---

#### Question 38

Chọn **HAI** tình huống là **rủi ro dự án (Project Risk)** – tức rủi ro ảnh hưởng đến khả năng hoàn thành dự án đúng tiến độ, ngân sách.

**Select one or more:**

- a. Nhà cung cấp bàn giao môi trường kiểm thử trễ 3 tuần so với kế hoạch ✅ *(Đúng – ảnh hưởng tiến độ dự án, không phải chất lượng phần mềm.)*
- b. Phần mềm tính sai tiền lương hàng tháng của nhân viên
- c. Dữ liệu cá nhân của khách hàng có nguy cơ bị rò rỉ ra bên ngoài
- d. Giao diện ứng dụng quá khó dùng khiến người dùng bỏ app hàng loạt
- e. Tester chủ chốt xin nghỉ việc giữa lúc dự án đang cao điểm ✅ *(Đúng – mất nguồn lực, ảnh hưởng khả năng hoàn thành dự án.)*

> Chính xác!
>
> Rủi ro dự án ảnh hưởng đến tiến độ, ngân sách, nguồn lực của dự án (môi trường bàn giao trễ, nhân sự chủ chốt nghỉ việc). Rủi ro sản phẩm ảnh hưởng đến chất lượng của chính phần mềm (tính sai lương, rò rỉ dữ liệu, giao diện khó dùng). Công thức chung: Mức độ rủi ro = Xác suất × Mức độ ảnh hưởng.
>
> The correct answers are: Nhà cung cấp bàn giao môi trường kiểm thử trễ 3 tuần so với kế hoạch, Tester chủ chốt xin nghỉ việc giữa lúc dự án đang cao điểm

---

#### Question 39

Hai rủi ro được đánh giá theo thang ảnh hưởng 10 điểm: R_A có xác suất xảy ra 0,4 và mức độ ảnh hưởng 9/10; R_B có xác suất xảy ra 0,8 và mức độ ảnh hưởng 5/10. Theo công thức **Mức độ rủi ro = Xác suất × Mức độ ảnh hưởng**, rủi ro nào cần được ưu tiên kiểm thử trước?

**Select one:**

- a. R_A, vì mức độ ảnh hưởng 9 cao hơn hẳn mức 5 của R_B
- b. Cả hai rủi ro có mức độ ngang nhau nên ưu tiên như nhau
- c. R_B, vì 0,8 × 5 = 4,0 lớn hơn 0,4 × 9 = 3,6 ✅ *(Chính xác. Mức độ rủi ro của R_A là 3,6; của R_B là 4,0 – R_B cao hơn nên được ưu tiên kiểm thử trước.)*
- d. Không thể so sánh vì hai rủi ro thuộc loại khác nhau

> Chính xác!
>
> Tính toán: R_A = 0,4 × 9 = 3,6; R_B = 0,8 × 5 = 4,0. Vì 4,0 > 3,6 nên R_B có mức độ rủi ro cao hơn và cần được ưu tiên kiểm thử trước theo nguyên tắc kiểm thử dựa trên rủi ro. Đáp án a sai vì chỉ nhìn vào mức ảnh hưởng mà bỏ qua xác suất; không được so sánh cảm tính khi đã có công thức định lượng.
>
> The correct answer is: R_B, vì 0,8 × 5 = 4,0 lớn hơn 0,4 × 9 = 3,6

---

#### Question 40

Trong Planning Poker, cả team **úp thẻ ước lượng xuống bàn và lật lên đồng thời**, thay vì để từng người nói ra con số của mình lần lượt. Vì sao phải làm như vậy?

**Select one:**

- a. Để rút ngắn thời gian họp ước lượng
- b. Vì quy tắc của dãy số Fibonacci bắt buộc các con số phải được giữ bí mật
- c. Để các thành viên mới không cần tham gia vào việc ước lượng
- d. Để tránh thiên kiến neo (anchoring) – ý kiến của người nói trước, đặc biệt là cấp trên hoặc người có ảnh hưởng, sẽ chi phối ước lượng của những người còn lại ✅ *(Chính xác. Việc lật thẻ đồng thời đảm bảo mỗi ước lượng là độc lập; dãy Fibonacci được dùng vì độ không chắc chắn của ước lượng tăng dần theo độ lớn của con số.)*

> Chính xác!
>
> Thiên kiến neo (anchoring bias) khiến người nghe bị "neo" vào con số nghe được đầu tiên, đặc biệt khi nó đến từ cấp trên. Úp thẻ và lật đồng thời loại bỏ ảnh hưởng này, buộc mỗi người phải suy nghĩ độc lập trước khi thấy ý kiến của người khác. Dãy Fibonacci (1, 2, 3, 5, 8, 13...) được chọn vì khoảng cách giữa các số càng lớn dần, phản ánh đúng bản chất: ước lượng càng lớn thì độ không chắc chắn càng cao.
>
> The correct answer is: Để tránh thiên kiến neo (anchoring) – ý kiến của người nói trước, đặc biệt là cấp trên hoặc người có ảnh hưởng, sẽ chi phối ước lượng của những người còn lại

---

---

### Đáp án Đề 2

#### Question 1

Phần mềm chấm điểm thi của trường yêu cầu: điểm thi là số thực từ **0 đến 10**, trong đó điểm **dưới 5** xếp loại "Rớt", điểm từ **5 đến dưới 8** xếp loại "Đạt", điểm từ **8 đến 10** xếp loại "Giỏi". Nếu áp dụng kỹ thuật **Phân vùng tương đương (Equivalence Partitioning)**, số phân vùng **hợp lệ** và số lượng test case tối thiểu để đạt 100% bao phủ EP (chỉ tính vùng hợp lệ) lần lượt là:

**Select one:**

- a. 2 phân vùng và 2 test case
- b. 1 phân vùng và 1 test case
- c. 3 phân vùng và 3 test case ✅ *(Chính xác. 3 khoảng điểm được xử lý bởi 3 quy tắc khác nhau → 3 phân vùng hợp lệ → cần 3 test case.)*
- d. 4 phân vùng và 4 test case

> Chính xác!
>
> Ba khoảng điểm [0,5), [5,8), [8,10] được phần mềm xử lý theo ba quy tắc khác nhau nên là ba phân vùng hợp lệ riêng biệt. Quy tắc EP cơ bản: mỗi phân vùng hợp lệ cần ít nhất một test case → tối thiểu 3 test case. Các đáp án khác sai vì gộp nhầm các khoảng có quy tắc khác nhau thành một phân vùng.
>
> The correct answer is: 3 phân vùng và 3 test case

---

#### Question 2

Trường học quy định: trường **"Số tín chỉ đăng ký"** mỗi học kỳ chỉ chấp nhận số nguyên từ **12 đến 24**. Áp dụng Phân vùng tương đương, số phân vùng (gồm cả hợp lệ và không hợp lệ) và số test case tối thiểu để bao phủ đủ tất cả các phân vùng lần lượt là:

**Select one:**

- a. 3 phân vùng và 3 test case ✅ *(Chính xác. Gồm vùng <12 không hợp lệ, vùng 12–24 hợp lệ, vùng >24 không hợp lệ → cần 3 test case.)*
- b. 2 phân vùng và 2 test case
- c. 3 phân vùng và 4 test case
- d. 1 phân vùng và 3 test case

> Chính xác!
>
> Miền giá trị nguyên được chia thành: (1) giá trị nhỏ hơn 12 – không hợp lệ, (2) giá trị từ 12 đến 24 – hợp lệ, (3) giá trị lớn hơn 24 – không hợp lệ. Mỗi phân vùng (dù hợp lệ hay không) cần ít nhất một test case → tổng 3 test case. Đáp án b sai vì bỏ sót một vùng không hợp lệ; đáp án d sai vì gộp tất cả thành một vùng.
>
> The correct answer is: 3 phân vùng và 3 test case

---

#### Question 3

Hệ thống đặt phòng khách sạn yêu cầu trường **"Số đêm lưu trú"** nhận số nguyên hợp lệ từ **1 đến 30**. Áp dụng Phân tích giá trị biên theo phương pháp **2 giá trị** (ISTQB), tập giá trị kiểm thử nào là **ĐÚNG**?

**Select one:**

- a. 1, 2, 29, 30
- b. 0, 1, 30, 31 ✅ *(Chính xác. Tại mỗi biên lấy giá trị ngay trên biên và giá trị liền kề ngoài vùng.)*
- c. 1, 15, 30
- d. 0, 1, 2, 29, 30, 31

> Chính xác!
>
> BVA 2 giá trị: tại biên dưới (1) lấy 1 và giá trị liền kề ngoài vùng là 0; tại biên trên (30) lấy 30 và giá trị liền kề ngoài vùng là 31 → {0, 1, 30, 31}. Đáp án a thiếu các giá trị ngoài vùng (không test được hành vi từ chối); đáp án d là BVA 3 giá trị, không phải yêu cầu của đề.
>
> The correct answer is: 0, 1, 30, 31

---

#### Question 4

Vẫn trường **"Số đêm lưu trú"** (số nguyên, hợp lệ từ **1 đến 30**), nhưng lần này áp dụng Phân tích giá trị biên theo phương pháp **3 giá trị**. Tập giá trị kiểm thử nào là **ĐÚNG**?

**Select one:**

- a. 0, 1, 30, 31
- b. 1, 2, 29, 30
- c. 0, 15, 30
- d. 0, 1, 2, 29, 30, 31 ✅ *(Chính xác. Mỗi biên lấy: giá trị biên, giá trị liền kề trong vùng, giá trị liền kề ngoài vùng → 6 giá trị.)*

> Chính xác!
>
> BVA 3 giá trị: tại biên dưới lấy 0 (ngoài vùng), 1 (trên biên), 2 (trong vùng); tại biên trên lấy 29 (trong vùng), 30 (trên biên), 31 (ngoài vùng) → tổng 6 giá trị. Đáp án a là BVA 2 giá trị; đáp án b thiếu giá trị ngoài vùng nên không kiểm tra được khả năng từ chối đầu vào sai.
>
> The correct answer is: 0, 1, 2, 29, 30, 31

---

#### Question 5

Một bảng kiểm thử liệt kê **8 giá trị biên** cần kiểm tra cho một trường đầu vào. Nhóm đã thực thi test case bao phủ được **6** trong 8 giá trị đó. Độ bao phủ giá trị biên đạt được là:

**Select one:**

- a. 50%
- b. 60%
- c. 75% ✅ *(Chính xác. 6/8 × 100% = 75%.)*
- d. 80%

> Chính xác!
>
> Độ bao phủ = (số giá trị biên đã kiểm thử / tổng số giá trị biên cần kiểm thử) × 100% = (6/8) × 100% = 75%. Các đáp án còn lại tính sai tỷ lệ (b và d chia sai mẫu số, a là 4/8).
>
> The correct answer is: 75%

---

#### Question 6

Khi áp dụng Phân vùng tương đương, phát biểu nào sau đây là **ĐÚNG** về cách kết hợp giá trị vào test case?

**Select one:**

- a. Có thể gộp nhiều giá trị **không hợp lệ** vào cùng một test case để tiết kiệm thời gian
- b. Có thể gộp nhiều giá trị **hợp lệ** (thậm chí từ các vùng hợp lệ khác nhau) vào cùng các test case, nhưng mỗi giá trị **không hợp lệ** nên được đặt trong test case riêng ✅ *(Chính xác. Gộp giá trị không hợp lệ gây hiện tượng che lỗi – error masking.)*
- c. Mọi giá trị dù hợp lệ hay không đều nên gộp vào cùng một test case
- d. Không bao giờ được gộp hai giá trị thuộc hai phân vùng hợp lệ khác nhau vào cùng một test case

> Chính xác!
>
> Giá trị không hợp lệ thường làm hệ thống dừng xử lý và báo lỗi ngay tại giá trị đầu tiên, che mất lỗi ở các giá trị không hợp lệ còn lại (error masking) → mỗi giá trị không hợp lệ cần test case riêng. Ngược lại, nhiều giá trị hợp lệ (kể cả từ các vùng khác nhau) có thể gộp chung để tăng hiệu quả. Đáp án a và c gây che lỗi; đáp án d phủ nhận hoàn toàn nguyên tắc gộp vùng hợp lệ.
>
> The correct answer is: Có thể gộp nhiều giá trị **hợp lệ** (thậm chí từ các vùng hợp lệ khác nhau) vào cùng các test case, nhưng mỗi giá trị **không hợp lệ** nên được đặt trong test case riêng

---

#### Question 7

Chương trình ưu đãi học phí của trung tâm xét **3 điều kiện Boolean** độc lập: (C1) học viên cũ, (C2) đăng ký trước hạn, (C3) đóng học phí một lần. Nếu lập bảng quyết định **đầy đủ** (không rút gọn), số cột quy tắc (rule) cần có là:

**Select one:**

- a. 8 cột ✅ *(Chính xác. 3 điều kiện Boolean → 2³ = 8 tổ hợp đầy đủ.)*
- b. 3 cột
- c. 6 cột
- d. 9 cột

> Chính xác!
>
> Mỗi điều kiện Boolean có 2 trạng thái (Đúng/Sai); với 3 điều kiện độc lập, tổng số tổ hợp = 2³ = 8 cột quy tắc. Đáp án b lấy nhầm số điều kiện; đáp án d lấy 3² (công thức cho 2 điều kiện 3 trạng thái, không phù hợp).
>
> The correct answer is: 8 cột

---

#### Question 8

Một cột của bảng quyết định đã rút gọn có **3 ô "–" (don't care)** tại các điều kiện Boolean, và cột này dẫn đến một hành động duy nhất. Cột rút gọn này đại diện cho bao nhiêu cột của bảng quyết định đầy đủ?

**Select one:**

- a. 3 cột
- b. 6 cột
- c. 4 cột
- d. 8 cột ✅ *(Chính xác. Mỗi ô "–" nhân đôi số tổ hợp: 2³ = 8.)*

> Chính xác!
>
> Mỗi ô "–" (don't care) tương ứng với cả hai giá trị Đúng và Sai của điều kiện đó, nên một cột rút gọn với 3 ô "–" đại diện cho 2³ = 8 tổ hợp đầy đủ. Đáp án a và b lấy nhầm số ô "–" làm số cột hoặc cộng dồn; đáp án c là 2² (chỉ tính 2 ô "–").
>
> The correct answer is: 8 cột

---

#### Question 9

Cửa hàng quy định: khách được **giảm 15%** khi thỏa mãn điều kiện: **C1 = T** (có thẻ thành viên Bạc trở lên) **VÀ** (**C2 = T** (đơn hàng trên 300.000đ) **HOẶC** **C3 = T** (có mã voucher)). Một khách hàng **không có thẻ thành viên Bạc** (C1 = F), đơn hàng **500.000đ** (C2 = T), **không có mã voucher** (C3 = F). Kết quả đúng là:

**Select one:**

- a. Được giảm 15% vì đơn hàng trên 300.000đ
- b. Được giảm 10% vì không có thẻ thành viên
- c. Không được giảm 15% vì C1 = F (không có thẻ thành viên Bạc) ✅ *(Chính xác. Điều kiện yêu cầu C1 = T VÀ (C2 = T HOẶC C3 = T); C1 = F nên toàn bộ biểu thức sai.)*
- d. Được giảm 15% vì có C2 = T nên không cần xét C1

> Chính xác!
>
> Quy tắc: Giảm 15% ⟺ C1=T ∧ (C2=T ∨ C3=T). Với C1=F, C2=T, C3=F: mệnh đề (C2∨C3)=T nhưng C1=F nên toàn bộ điều kiện là F → không được giảm. Đáp án a và d chỉ xét C2 mà bỏ qua yêu cầu bắt buộc C1=T; đáp án b bịa thêm mức giảm 10% không có trong quy định.
>
> The correct answer is: Không được giảm 15% vì C1 = F (không có thẻ thành viên Bạc)

---

#### Question 10

Trong bảng quyết định của hệ thống quản lý đơn hàng có hai điều kiện: **C1** = "Đơn hàng đã thanh toán", **C2** = "Đơn hàng chưa thanh toán". Tổ hợp C1 = T và C2 = T cùng lúc là tổ hợp **không khả thi** (không thể xảy ra trong thực tế). Cách xử lý đúng khi tính độ bao phủ của bảng quyết định là:

**Select one:**

- a. Vẫn giữ tổ hợp đó và bắt buộc viết test case cho nó để đạt 100% bao phủ
- b. Loại tổ hợp không khả thi khỏi mẫu số khi tính độ bao phủ ✅ *(Chính xác. Tổ hợp không thể xảy ra không thể kiểm thử nên phải loại khỏi tổng số cột cần bao phủ.)*
- c. Ghi nhận tổ hợp đó là cột "–" (don't care) rồi rút gọn
- d. Bỏ qua toàn bộ bảng quyết định vì có tổ hợp không khả thi

> Chính xác!
>
> Tổ hợp không khả thi (infeasible combination) không bao giờ xảy ra nên không thể thực thi test case; khi tính độ bao phủ = (số cột đã test)/(tổng số cột khả thi), phải loại nó khỏi mẫu số. Đáp án a đòi hỏi kiểm thử điều không thể xảy ra; đáp án c nhầm lẫn "không khả thi" với "don't care"; đáp án d phản ứng thái quá.
>
> The correct answer is: Loại tổ hợp không khả thi khỏi mẫu số khi tính độ bao phủ

---

#### Question 11

Máy bán nước tự động có các trạng thái: **S1: Chờ tiền**, **S2: Sẵn sàng bán**, **S3: Trả hàng**, với các chuyển trạng thái: S1 --(nạp đủ tiền)--> S2; S1 --(nạp chưa đủ tiền)--> S1; S2 --(chọn nước)--> S3; S3 --(trả hàng xong)--> S1. Người dùng thực hiện chuỗi sự kiện: **nạp đủ tiền → chọn nước → nạp chưa đủ tiền**. Trạng thái cuối cùng của máy là:

**Select one:**

- a. S1: Chờ tiền ✅ *(Chính xác. Nạp đủ tiền: S1→S2; chọn nước: S2→S3→S1 (trả hàng xong quay về S1); nạp chưa đủ tiền: ở S1 vẫn ở S1.)*
- b. S2: Sẵn sàng bán
- c. S3: Trả hàng
- d. Máy bị kẹt ở S3 vì chưa nạp thêm tiền

> Chính xác!
>
> Truy vết chuỗi: bắt đầu S1 → sự kiện "nạp đủ tiền" chuyển sang S2 → sự kiện "chọn nước" chuyển sang S3, sau đó "trả hàng xong" tự động quay về S1 → sự kiện "nạp chưa đủ tiền" tại S1 vẫn ở S1. Trạng thái cuối là S1 (Chờ tiền). Đáp án b dừng ở giữa chuỗi; đáp án c quên bước tự động quay về S1 sau khi trả hàng.
>
> The correct answer is: S1: Chờ tiền

---

#### Question 12

Một hệ thống có **4 trạng thái** và **5 sự kiện** có thể xảy ra ở mỗi trạng thái. Phân tích cho thấy có **9 chuyển trạng thái hợp lệ**. Số lượng **ô chuyển không hợp lệ** trong bảng chuyển trạng thái là:

**Select one:**

- a. 5
- b. 16
- c. 9
- d. 11 ✅ *(Chính xác. Tổng số ô = 4 × 5 = 20; ô không hợp lệ = 20 − 9 = 11.)*

> Chính xác!
>
> Bảng chuyển trạng thái có 4 × 5 = 20 ô (mỗi cặp trạng thái–sự kiện một ô). Trong đó 9 ô là chuyển hợp lệ, số còn lại 20 − 9 = 11 ô là chuyển không hợp lệ (cần test để đảm bảo hệ thống xử lý đúng). Đáp án b tính 4² (nhầm ma trận trạng thái–trạng thái); đáp án c lấy số chuyển hợp lệ.
>
> The correct answer is: 11

---

#### Question 13

Trong kiểm thử chuyển trạng thái, **bao phủ 1-switch** (N-switch với N=1) được định nghĩa là:

**Select one:**

- a. Thực thi mỗi trạng thái ít nhất một lần
- b. Thực thi mỗi chuyển trạng thái hợp lệ đơn lẻ ít nhất một lần
- c. Thực thi mọi **cặp chuyển trạng thái hợp lệ liên tiếp** (hai chuyển liên tiếp nhau) ít nhất một lần ✅ *(Chính xác. 1-switch bao phủ mọi chuỗi 2 chuyển liên tiếp.)*
- d. Thực thi mọi chuyển không hợp lệ ít nhất một lần

> Chính xác!
>
> Bao phủ N-switch yêu cầu bao phủ mọi chuỗi gồm N+1 chuyển hợp lệ liên tiếp; với N=1 là mọi cặp chuyển liên tiếp (hai chuyển nối tiếp nhau). Đáp án b mô tả bao phủ 0-switch (mọi chuyển đơn lẻ); đáp án a là bao phủ trạng thái; đáp án d sai vì chuyển không hợp lệ thuộc phạm vi kiểm thử robustness, không phải định nghĩa 1-switch.
>
> The correct answer is: Thực thi mọi **cặp chuyển trạng thái hợp lệ liên tiếp** (hai chuyển liên tiếp nhau) ít nhất một lần

---

#### Question 14

Sắp xếp nào sau đây thể hiện đúng thứ tự độ mạnh của các tiêu chí bao phủ chuyển trạng thái, **từ mạnh đến yếu**?

**Select one:**

- a. Bao phủ trạng thái > Bao phủ mọi chuyển (0-switch) > Bao phủ mọi cặp chuyển (1-switch)
- b. Bao phủ mọi cặp chuyển (1-switch) > Bao phủ mọi chuyển hợp lệ (0-switch) > Bao phủ mọi trạng thái ✅ *(Chính xác. Bao phủ cặp chuyển ngụ ý đã bao phủ từng chuyển, và bao phủ từng chuyển ngụ ý đã qua mọi trạng thái liên quan.)*
- c. Bao phủ mọi chuyển hợp lệ (0-switch) > Bao phủ mọi cặp chuyển (1-switch) > Bao phủ mọi trạng thái
- d. Cả ba tiêu chí mạnh ngang nhau vì đều kiểm thử chuyển trạng thái

> Chính xác!
>
> Quan hệ bao hàm: đạt bao phủ 1-switch (mọi cặp chuyển liên tiếp) thì tự động đạt 0-switch (mọi chuyển đơn lẻ, vì mỗi cặp chứa hai chuyển); đạt 0-switch thì đã đi qua các trạng thái đầu–cuối của mọi chuyển. Do đó thứ tự mạnh→yếu: 1-switch > 0-switch > bao phủ trạng thái. Đáp án a đảo ngược hoàn toàn; đáp án c đảo 1-switch và 0-switch.
>
> The correct answer is: Bao phủ mọi cặp chuyển (1-switch) > Bao phủ mọi chuyển hợp lệ (0-switch) > Bao phủ mọi trạng thái

---

#### Question 15

Cho đoạn code:

```c
int f(int x) {
    int y = 0;          // (1)
    if (x > 10) {       // (2)
        y = 1;          // (3)
        y = y + 2;      // (4)
    }
    return y;           // (5)
}
```

Chạy một test case với **x = 5**. Độ bao phủ **lệnh** (statement coverage) đạt được là:

**Select one:**

- a. 100%
- b. 80%
- c. 60%
- d. 50% ✅ *(Chính xác. Chỉ 2/4 lệnh thực thi được chạy: (1) và (5); các lệnh (3), (4) trong nhánh if không chạy vì x = 5.)*

> Chính xác!
>
> Tổng số lệnh có thể thực thi (không tính dòng if vì nó là quyết định): (1) gán y=0, (3) gán y=1, (4) cộng y, (5) return → 4 lệnh. Với x=5, điều kiện x>10 sai nên chỉ chạy (1) và (5) → 2/4 = 50%. Đáp án a và b nhầm lẫn với các ca test khác; đáp án c tính sai số lệnh (đếm cả dòng if).
>
> The correct answer is: 50%

---

#### Question 16

Cho đoạn code:

```c
int g(int x) {
    int y = 0;          // (1)
    if (x > 0)          // (2)
        y = 1;          // (3)
    else
        y = -1;         // (4)
    return y;           // (5)
}
```

Chạy duy nhất một test case với **x = 5**. Phát biểu nào sau đây là **ĐÚNG**?

**Select one:**

- a. Bao phủ nhánh đạt 50% (chỉ nhánh True được chạy), trong khi bao phủ lệnh đạt 75% (3/4 lệnh) ✅ *(Chính xác. Một ca test có thể đạt bao phủ lệnh cao nhưng bao phủ nhánh chỉ một nửa.)*
- b. Bao phủ nhánh đạt 100% vì điều kiện đã được đánh giá
- c. Bao phủ lệnh đạt 50% và bao phủ nhánh đạt 50%
- d. Bao phủ nhánh đạt 75% và bao phủ lệnh đạt 50%

> Chính xác!
>
> Với x=5, nhánh True chạy lệnh (3), nhánh False (lệnh (4)) không chạy → bao phủ nhánh = 1/2 = 50%. Các lệnh đã chạy: (1), (3), (5) → 3/4 lệnh có thể thực thi ((1), (3), (4), (5)) = 75% bao phủ lệnh. Đáp án b nhầm "đánh giá điều kiện" với "chạy cả hai kết quả của quyết định"; đáp án c và d đều hoán đổi sai hai con số — bao phủ lệnh là 75% (cao hơn), bao phủ nhánh mới là 50%.
>
> The correct answer is: Bao phủ nhánh đạt 50% (chỉ nhánh True được chạy), trong khi bao phủ lệnh đạt 75% (3/4 lệnh)

---

#### Question 17

Một hàm chỉ chứa một câu lệnh `if` **không có** nhánh `else`. Bộ test case đạt **100% bao phủ lệnh** nhưng tất cả các ca test đều đi qua **nhánh True**. Kết luận nào sau đây là **ĐÚNG**?

**Select one:**

- a. Đạt 100% bao phủ lệnh thì chắc chắn đã đạt 100% bao phủ nhánh
- b. Cần thêm ca test đi qua nhánh False mới đạt 100% bao phủ nhánh ✅ *(Chính xác. Bao phủ lệnh không đảm bảo bao phủ nhánh: nhánh False (nhánh ẩn của if không else) chưa bao giờ được chạy.)*
- c. Không thể đạt 100% bao phủ lệnh nếu chưa đạt 100% bao phủ nhánh
- d. Với if không có else thì bao phủ lệnh và bao phủ nhánh luôn bằng nhau

> Chính xác!
>
> Đạt 100% bao phủ lệnh KHÔNG đảm bảo 100% bao phủ nhánh: mọi lệnh trong thân if đã chạy nhưng nhánh False (khi điều kiện sai, bỏ qua thân if) chưa bao giờ được thực thi. Đây là ví dụ kinh điển cho quan hệ: 100% bao phủ nhánh ⇒ 100% bao phủ lệnh, nhưng chiều ngược lại không đúng. Đáp án a và c đảo ngược quan hệ này.
>
> The correct answer is: Cần thêm ca test đi qua nhánh False mới đạt 100% bao phủ nhánh

---

#### Question 18

Xét vòng lặp `while (a > 0 || b > 0)` trong code Java. Ở mức **bao phủ nhánh** (branch coverage – KHÔNG phải bao phủ điều kiện), biểu thức điều kiện của vòng lặp được xem là:

**Select one:**

- a. Hai quyết định riêng biệt: `a > 0` và `b > 0`
- b. Một quyết định duy nhất với hai kết quả True/False ✅ *(Chính xác. Branch coverage chỉ quan tâm toàn bộ biểu thức đúng hay sai, không tách các điều kiện nguyên tử.)*
- c. Ba nhánh: True, False và vòng lặp không bao giờ kết thúc
- d. Một lệnh nên không tính vào bao phủ nhánh

> Chính xác!
>
> Ở mức bao phủ nhánh, toàn bộ biểu thức Boolean của `while` được coi là MỘT quyết định (decision) với hai kết quả có thể: True (tiếp tục lặp) và False (thoát lặp). Việc tách `a > 0`, `b > 0` thành các điều kiện nguyên tử thuộc về bao phủ điều kiện (condition coverage), là tiêu chí mạnh hơn và khác với yêu cầu của đề. Đáp án c bịa thêm nhánh thứ ba.
>
> The correct answer is: Một quyết định duy nhất với hai kết quả True/False

---

#### Question 19

Nhóm phát triển viết hàm tính lương nhưng cài đặt **sai công thức** so với đặc tả yêu cầu (thiếu khoản phụ cấp). Bộ test hộp trắng của họ đạt **100% bao phủ lệnh và 100% bao phủ nhánh**, tất cả test case đều pass. Hạn chế nào của kiểm thử hộp trắng được minh họa ở đây?

**Select one:**

- a. Kiểm thử hộp trắng không thể đạt 100% bao phủ nhánh
- b. Kiểm thử hộp trắng luôn tốn nhiều thời gian hơn kiểm thử hộp đen
- c. Kiểm thử hộp trắng không phát hiện được lỗi sai lệch so với yêu cầu / chức năng bị cài đặt sai hoặc thiếu ✅ *(Chính xác. Bao phủ code chỉ đo mức độ code được chạy, không kiểm tra code có đúng yêu cầu hay không.)*
- d. Kiểm thử hộp trắng không thể áp dụng cho hàm tính lương

> Chính xác!
>
> Bao phủ lệnh/nhánh chỉ cho biết code đã được thực thi đến đâu, còn việc code có thực hiện ĐÚNG yêu cầu hay không là câu hỏi về đặc tả – thuộc phạm vi kiểm thử hộp đen. Code sai công thức nhưng test vẫn pass vì các test case được viết theo code hiện tại (hoặc thiếu oracle từ yêu cầu). Đáp án a sai về mặt kỹ thuật; đáp án b và d không liên quan đến tình huống.
>
> The correct answer is: Kiểm thử hộp trắng không phát hiện được lỗi sai lệch so với yêu cầu / chức năng bị cài đặt sai hoặc thiếu

---

#### Question 20

Áp dụng kỹ thuật **đoán lỗi dựa trên kinh nghiệm** (Error Guessing) cho form đăng ký tài khoản, những tình huống nào sau đây là ví dụ **phù hợp**?

**Select one or more:**

- a. Nhập ngày sinh 29/02/2023 (năm 2023 không phải năm nhuận) ✅ *(Đúng – ngày không tồn tại là lỗi biên ngày tháng kinh điển mà tester giàu kinh nghiệm thường đoán.)*
- b. Chạy lại toàn bộ bộ regression test tự động sau mỗi lần build
- c. Để trống (chuỗi rỗng) trường "Họ tên" bắt buộc rồi nhấn Đăng ký ✅ *(Đúng – bỏ trống trường bắt buộc là tình huống lỗi phổ biến cần đoán trước.)*
- d. Đọc đặc tả yêu cầu để lập ma trận truy vết yêu cầu (RTM)
- e. Nhập ký tự đặc biệt như `' OR '1'='1` vào ô tìm kiếm tên đăng nhập ✅ *(Đúng – ký tự đặc biệt/SQL injection cơ bản là mục tiêu đoán lỗi quen thuộc.)*

> Chính xác!
>
> Error Guessing dựa vào kinh nghiệm để dự đoán những đầu vào dễ gây lỗi: ngày không hợp lệ (29/02 năm không nhuận), chuỗi rỗng ở trường bắt buộc, ký tự đặc biệt/SQL injection. Đáp án b là kiểm thử hồi quy (kỹ thuật khác), đáp án d là công việc truy vết yêu cầu – cả hai đều không phải Error Guessing.
>
> The correct answers are: Nhập ngày sinh 29/02/2023 (năm 2023 không phải năm nhuận), Để trống (chuỗi rỗng) trường "Họ tên" bắt buộc rồi nhấn Đăng ký, Nhập ký tự đặc biệt như `' OR '1'='1` vào ô tìm kiếm tên đăng nhập

---

# Đề 2 — Quản lý kiểm thử, tự động hoá, API, CI/CD, AI (Question 21–40)

#### Question 21

Trong một phiên kiểm thử khám phá (Exploratory Testing), trưởng nhóm đưa cho mỗi tester một tờ giấy ghi: *"Khám phá chức năng thanh toán trong 60 phút, tập trung vào các tình huống thanh toán thất bại và thông báo lỗi hiển thị."* Theo khái niệm trong slide, tờ giấy này được gọi là gì?

**Select one:**

- a. Test Charter — tuyên bố ngắn gọn về mục tiêu và phạm vi của một phiên khám phá, giúp tester tự do khám phá nhưng vẫn có định hướng ✅ *(Chính xác. Charter định hướng "khám phá cái gì" mà không gò bó "khám phá như thế nào".)*
- b. Test Script chi tiết từng bước
- c. Báo cáo defect
- d. Kế hoạch kiểm thử tổng thể của dự án

> Chính xác!
>
> Test Charter là tuyên bố ngắn gọn về mục tiêu/phạm vi của một phiên khám phá (session): nó trả lời "khám phá cái gì" và trong bao lâu, nhưng không chỉ dẫn chi tiết từng bước như Test Script (đáp án b) — vì exploratory testing đề cao sự tự do và tư duy của tester. Nó cũng không phải báo cáo defect (đáp án c, là kết quả sau khi tìm lỗi) hay kế hoạch kiểm thử tổng thể (đáp án d, là tài liệu ở cấp độ dự án).
>
> The correct answer is: Test Charter — tuyên bố ngắn gọn về mục tiêu và phạm vi của một phiên khám phá, giúp tester tự do khám phá nhưng vẫn có định hướng

---

#### Question 22

Tester báo một defect: *"Nút 'Lưu nháp' trên form đăng ký không hoạt động."* Developer kiểm tra và phát hiện: theo đặc tả, form đăng ký này vốn không hề có chức năng lưu nháp — nút đó chỉ là nhãn trang trí do designer thêm vào. Developer nên chuyển defect sang trạng thái nào?

**Select one:**

- a. Fixed – vì đã xác minh hành vi
- b. Duplicate – vì lỗi này đã được báo trước đó
- c. Rejected – vì đây là hành vi đúng theo đặc tả, không phải lỗi, cần kèm giải thích cho tester ✅ *(Chính xác. Rejected dùng khi báo cáo không phải là defect thực sự.)*
- d. Deferred – vì sẽ sửa ở phiên bản sau

> Chính xác!
>
> Khi developer xác minh và kết luận hành vi của hệ thống là đúng theo đặc tả (không phải lỗi), defect được đánh dấu **Rejected** kèm lời giải thích. Đáp án d (Deferred) sai vì Deferred nghĩa là công nhận đó là lỗi thật nhưng hoãn sửa sang phiên bản sau. Đáp án b (Duplicate) chỉ dùng khi defect đã được báo trùng trước đó. Đáp án a (Fixed) sai vì không có code nào được sửa.
>
> The correct answer is: Rejected – vì đây là hành vi đúng theo đặc tả, không phải lỗi, cần kèm giải thích cho tester

---

#### Question 23

Ngày ra mắt sản phẩm, ứng dụng bị crash ngay khi người dùng mở màn hình chính, khiến toàn bộ người dùng không thể sử dụng. Khi ghi nhận defect này, phát biểu nào sau đây phân biệt **đúng** hai khái niệm Severity và Priority?

**Select one:**

- a. Severity và Priority là một: đều do tester quyết định dựa trên cảm tính về mức độ nghiêm trọng
- b. Severity do tester đánh giá mức ảnh hưởng kỹ thuật của lỗi (crash toàn app → Severity Cao); Priority phản ánh góc độ kinh doanh và mức độ khẩn cấp, quyết định thứ tự ưu tiên sửa (ngày ra mắt → Priority Cao) ✅ *(Chính xác. Severity = ảnh hưởng kỹ thuật; Priority = thứ tự sửa theo kinh doanh.)*
- c. Severity do khách hàng quyết định thứ tự sửa, còn Priority do tester đánh giá ảnh hưởng kỹ thuật
- d. Lỗi này có Severity Cao nên Priority tự động Cao theo — hai khái niệm luôn đi cùng nhau

> Chính xác!
>
> **Severity** (mức nghiêm trọng) do tester đánh giá dựa trên ảnh hưởng kỹ thuật của lỗi đối với hệ thống — crash toàn bộ app khi mở là Severity Cao. **Priority** (mức ưu tiên) phản ánh góc độ kinh doanh/khẩn cấp và quyết định defect nào được sửa trước — lỗi chặn toàn bộ người dùng đúng ngày ra mắt nên Priority Cao. Hai khái niệm độc lập: một lỗi sai chính tả (Severity thấp) trên banner trang chủ ngày ra mắt vẫn có thể Priority cao, và ngược lại.
>
> The correct answer is: Severity do tester đánh giá mức ảnh hưởng kỹ thuật của lỗi (crash toàn app → Severity Cao); Priority phản ánh góc độ kinh doanh và mức độ khẩn cấp, quyết định thứ tự ưu tiên sửa (ngày ra mắt → Priority Cao)

---

#### Question 24

Một developer nhận được báo cáo defect chỉ ghi: *"Chức năng tìm kiếm bị lỗi. Kết quả sai."* Developer mất nửa ngày mà vẫn không tái hiện được. Theo slide, trường thông tin nào sau đây là **quan trọng nhất** mà một báo cáo defect tốt bắt buộc phải có để developer tái hiện lỗi?

**Select one:**

- a. Tên của tester đã phát hiện ra lỗi
- b. Ảnh chụp màn hình trang chủ của ứng dụng
- c. Mức lương của developer được giao sửa lỗi
- d. Các bước tái hiện chi tiết (steps to reproduce) kèm môi trường, dữ liệu kiểm thử, kết quả thực tế và kết quả mong đợi ✅ *(Chính xác. Không tái hiện được thì không thể xác minh và sửa lỗi.)*

> Chính xác!
>
> Trường quan trọng nhất của defect report là **các bước tái hiện** kèm môi trường (trình duyệt, phiên bản, thiết bị), dữ liệu kiểm thử đã dùng, cùng **kết quả thực tế (actual)** và **kết quả mong đợi (expected)**. Nếu developer không tái hiện được lỗi thì không thể xác định nguyên nhân và không thể xác minh bản sửa. Các đáp án còn lại (tên tester, ảnh trang chủ không liên quan, thông tin lương) đều không giúp tái hiện lỗi.
>
> The correct answer is: Các bước tái hiện chi tiết (steps to reproduce) kèm môi trường, dữ liệu kiểm thử, kết quả thực tế và kết quả mong đợi

---

#### Question 25

Chọn **HAI** trường hợp **nên** tự động hoá kiểm thử.

**Select one or more:**

- a. Kiểm thử tính dễ sử dụng (usability) của một giao diện hoàn toàn mới
- b. Bộ kiểm thử hồi quy (regression) ổn định, được chạy lại mỗi khi có commit mới trên CI ✅ *(Đúng – lặp lại thường xuyên, ít thay đổi, ROI cao.)*
- c. Test case cho một tính năng khuyến mãi chỉ chạy đúng một lần rồi bỏ
- d. Kịch bản cần sinh 10.000 bộ dữ liệu khách hàng khác nhau để kiểm tra nhập liệu hàng loạt ✅ *(Đúng – máy làm nhanh và chính xác hơn người ở khối lượng lớn.)*
- e. Kiểm thử màn hình đang được designer thay đổi layout mỗi ngày

> Chính xác!
>
> Tự động hoá hiệu quả khi test **lặp lại nhiều lần** (regression chạy mỗi commit trên CI — đáp án b) hoặc **khối lượng lớn, máy làm tốt hơn người** (sinh 10.000 bộ dữ liệu — đáp án d). Ngược lại không nên tự động: usability cần đánh giá chủ quan của con người (a), test chỉ chạy một lần thì chi phí viết script cao hơn lợi ích (c), giao diện thay đổi liên tục khiến script hỏng liên tục, chi phí bảo trì lớn (e).
>
> The correct answers are: Bộ kiểm thử hồi quy (regression) ổn định, được chạy lại mỗi khi có commit mới trên CI, Kịch bản cần sinh 10.000 bộ dữ liệu khách hàng khác nhau để kiểm tra nhập liệu hàng loạt

---

#### Question 26

Một team báo cáo cấu trúc bộ kiểm thử của họ: 80% là kiểm thử ở tầng UI (E2E qua trình duyệt), 15% kiểm thử API, 5% Unit Test. Theo slide, cấu trúc này được gọi là gì và hậu quả chính là gì?

**Select one:**

- a. Ice-cream cone (anti-pattern của Test Pyramid): tháp bị "lộn ngược", test UI chậm, dễ flaky, phát hiện lỗi muộn và chi phí sửa đắt ✅ *(Chính xác. Tầng UI phải là nhỏ nhất, Unit phải là lớn nhất.)*
- b. Test Pyramid chuẩn: càng lên cao càng nhiều test là đúng vì UI gần người dùng nhất
- c. Testing Trophy: tầng Integration chiếm tỉ trọng lớn nhất là hoàn toàn hợp lý
- d. Shift-Left: phát hiện lỗi sớm ngay từ giai đoạn yêu cầu

> Chính xác!
>
> Cấu trúc 80% UI / 5% Unit là **Ice-cream cone** — tháp kiểm thử bị lộn ngược (anti-pattern). Hậu quả: test UI chạy chậm (mở trình duyệt thật), dễ flaky (phụ thuộc render, mạng), và lỗi ở logic nghiệp vụ chỉ bị phát hiện ở tầng trên cùng — muộn và đắt đỏ để sửa. Tháp chuẩn yêu cầu ngược lại: nhiều Unit Test nhanh-rẻ ở đáy, ít E2E ở đỉnh. Đáp án c sai vì Testing Trophy ưu tiên tầng Integration chứ không phải UI.
>
> The correct answer is: Ice-cream cone (anti-pattern của Test Pyramid): tháp bị "lộn ngược", test UI chậm, dễ flaky, phát hiện lỗi muộn và chi phí sửa đắt

---

#### Question 27

Một test case trong bộ kiểm thử tự động có hành vi kỳ lạ: chạy riêng lẻ thì luôn Pass, nhưng khi chạy cùng cả bộ test thì thỉnh thoảng Fail ở bước kiểm tra số dư tài khoản. Nguyên nhân **chính** của hiện tượng flaky test này là gì?

**Select one:**

- a. Tester đã viết sai yêu cầu nghiệp vụ nên test không ổn định
- b. Máy tính chạy test quá yếu nên kết quả sai ngẫu nhiên
- c. Test phụ thuộc vào thứ tự chạy và dùng chung dữ liệu với các test khác (ví dụ test trước đã thay đổi số dư), cộng với race condition khi chờ phản hồi bất đồng bộ ✅ *(Chính xác. Flaky = không đơn lập và không đồng bộ.)*
- d. Ngôn ngữ lập trình dùng để viết test không phù hợp

> Chính xác!
>
> Flaky test (lúc Pass lúc Fail) thường do test **không đơn lập**: phụ thuộc thứ tự chạy, dùng chung dữ liệu/dùng chung tài khoản với test khác (test chạy trước đã làm thay đổi số dư), hoặc **race condition** với các thao tác bất đồng bộ (chưa chờ API/animation hoàn tất đã assert). Đáp án a sai vì viết sai yêu cầu sẽ gây Fail ổn định chứ không phải flaky. Khắc phục: mỗi test tự tạo và dọn dẹp dữ liệu riêng, dùng cơ chế chờ thông minh thay vì phụ thuộc thời gian.
>
> The correct answer is: Test phụ thuộc vào thứ tự chạy và dùng chung dữ liệu với các test khác (ví dụ test trước đã thay đổi số dư), cộng với race condition khi chờ phản hồi bất đồng bộ

---

#### Question 28

Đoạn script kiểm thử có dòng `sleep(5000)` — dừng cứng 5 giây trước khi kiểm tra thông báo "Đặt hàng thành công", vì chờ API xử lý xong. Theo best practice trong slide, nên thay thế `sleep(5000)` bằng cách nào?

**Select one:**

- a. Tăng lên `sleep(10000)` cho chắc chắn, vì API đôi khi chậm hơn 5 giây
- b. Dùng Explicit Wait / Auto-wait: chờ đến khi thỏa một điều kiện cụ thể (ví dụ phần tử thông báo hiển thị và có thể tương tác, hoặc response của API trả về) rồi mới tiếp tục ✅ *(Chính xác. Chờ theo điều kiện thay vì chờ theo thời gian cố định.)*
- c. Xoá luôn dòng chờ vì test tự động chạy đủ nhanh
- d. Chia nhỏ thành nhiều `sleep(1000)` liên tiếp để dễ debug

> Chính xác!
>
> Hard sleep dừng cứng bất kể hệ thống đã sẵn sàng hay chưa: nếu API xong sớm thì lãng phí thời gian, nếu API chậm hơn 5 giây thì test vẫn Fail — vừa chậm vừa flaky. **Explicit Wait / Auto-wait** chờ đến khi một điều kiện cụ thể được thỏa mãn (element visible/clickable, network response hoàn tất) rồi mới bước tiếp: nhanh khi hệ thống nhanh, đủ kiên nhẫn khi hệ thống chậm. Đáp án a và d vẫn là hard sleep, chỉ đổi con số.
>
> The correct answer is: Dùng Explicit Wait / Auto-wait: chờ đến khi thỏa một điều kiện cụ thể (ví dụ phần tử thông báo hiển thị và có thể tương tác, hoặc response của API trả về) rồi mới tiếp tục

---

#### Question 29

Team áp dụng Page Object Model với file `CheckoutPage.js` (chứa locators và các hàm thao tác như `nhapDiaChi()`, `bamDatHang()`) và file `checkout.spec.js` (chứa kịch bản test). Khẳng định nào sau đây là **đúng** về cách tổ chức code?

**Select one:**

- a. Nên viết các câu lệnh `expect` (assertion) ngay trong `CheckoutPage.js` để gom logic kiểm chứng một chỗ
- b. Mỗi file spec nên tự định nghĩa lại locator riêng để không phụ thuộc vào Page Object
- c. Page Object nên chứa cả code gọi API backend để test chạy nhanh hơn
- d. Các câu lệnh kiểm chứng kết quả (`expect`/assert) nên nằm ở file test (`checkout.spec.js`); Page Object chỉ chứa locator và hành động/thao tác, không chứa logic kiểm chứng ✅ *(Chính xác. Tách "thao tác" khỏi "kiểm chứng".)*

> Chính xác!
>
> Nguyên tắc POM: Page Object đóng gói **cách tương tác** với trang (locator + hành động), còn file test (spec) giữ **logic kiểm chứng** (`expect`/assert). Nhờ đó khi UI thay đổi chỉ sửa một chỗ trong Page Object, và cùng một hành động có thể được kiểm chứng theo nhiều cách ở các test khác nhau. Đáp án a sai vì nhét assertion vào Page Object làm nó phình to và khó tái sử dụng; đáp án b phá vỡ đúng lợi ích của POM.
>
> The correct answer is: Các câu lệnh kiểm chứng kết quả (`expect`/assert) nên nằm ở file test (`checkout.spec.js`); Page Object chỉ chứa locator và hành động/thao tác, không chứa logic kiểm chứng

---

#### Question 30

Chức năng đăng nhập cần kiểm thử với 50 cặp tài khoản/mật khẩu khác nhau (đúng, sai mật khẩu, tài khoản bị khóa...). Thay vì viết 50 script riêng, tester viết **một** script duy nhất đọc dữ liệu từ file CSV và chạy lặp lại 50 lần. Kỹ thuật này được gọi là gì và mục đích chính của nó là gì?

**Select one:**

- a. Data-Driven Testing: tách dữ liệu kiểm thử ra khỏi script để cùng một script chạy được với nhiều bộ dữ liệu, dễ bảo trì và mở rộng ✅ *(Chính xác. Thêm case mới = thêm dòng dữ liệu, không sửa code.)*
- b. Keyword-Driven Testing: tách từ khóa hành động ra khỏi script
- c. Exploratory Testing: khám phá tự do không cần kịch bản
- d. Mutation Testing: chèn lỗi vào code để đánh giá chất lượng test

> Chính xác!
>
> **Data-Driven Testing** tách dữ liệu kiểm thử (file CSV/JSON/bảng) ra khỏi logic script: một script duy nhất chạy lặp với nhiều bộ dữ liệu. Lợi ích: muốn thêm trường hợp kiểm thử mới chỉ cần thêm dòng dữ liệu, không phải sửa code — dễ bảo trì và mở rộng. Đáp án b (Keyword-Driven) tách các *hành động/từ khóa* chứ không phải dữ liệu; đáp án d (Mutation Testing) là kỹ thuật đánh giá chất lượng bộ test bằng cách chèn lỗi giả vào code.
>
> The correct answer is: Data-Driven Testing: tách dữ liệu kiểm thử ra khỏi script để cùng một script chạy được với nhiều bộ dữ liệu, dễ bảo trì và mở rộng

---
#### Question 31

Một tester đã đăng nhập thành công và có token hợp lệ, sau đó gọi API `DELETE /api/admin/users/123` (chỉ dành cho tài khoản Admin) bằng tài khoản thường. Server nên trả về mã trạng thái nào, và vì sao?

**Select one:**

- a. 401 Unauthorized – vì tài khoản thường không được phép xoá người dùng
- b. 403 Forbidden – vì request đã được xác thực (có token hợp lệ) nhưng bị từ chối do thiếu quyền truy cập ✅ *(Chính xác. 401 = chưa xác thực; 403 = đã xác thực nhưng bị cấm.)*
- c. 404 Not Found – vì tài khoản thường không "thấy" được API của Admin
- d. 200 OK – vì token hợp lệ nên mọi request đều được chấp nhận

> Chính xác!
>
> **401 Unauthorized** nghĩa là *chưa xác thực* (thiếu token, token hết hạn/không hợp lệ) — server không biết bạn là ai. **403 Forbidden** nghĩa là server *đã biết bạn là ai* (token hợp lệ) nhưng bạn *không có quyền* thực hiện hành động đó. Tình huống này: đã đăng nhập, token hợp lệ, nhưng vai trò "user thường" bị cấm gọi API Admin → 403.
>
> The correct answer is: 403 Forbidden – vì request đã được xác thực (có token hợp lệ) nhưng bị từ chối do thiếu quyền truy cập

---

#### Question 32

Chọn **TẤT CẢ** các cặp "tình huống – mã trạng thái HTTP" là **đúng**.

**Select one or more:**

- a. POST tạo tài nguyên mới thành công → server trả 201 ✅ *(Đúng – 201 Created dành cho tạo mới thành công.)*
- b. Đăng nhập thành công bắt buộc phải trả 201
- c. Client gửi dữ liệu sai định dạng (ví dụ JSON không hợp lệ) → server trả 400 ✅ *(Đúng – 400 Bad Request: lỗi do phía client.)*
- d. Lỗi nội bộ phía server (null pointer trong code backend) → server trả 400
- e. Truy vấn một tài nguyên không tồn tại → server trả 404 ✅ *(Đúng – 404 Not Found.)*

> Chính xác!
>
> Mẹo nhớ: **2xx** "chào mừng" (200 OK; **201 Created** cho POST tạo mới — đáp án a); **4xx** "lỗi tại bạn" (**400** Bad Request khi client gửi dữ liệu sai — đáp án c; 401/403 xác thực-phân quyền; **404** Not Found khi tài nguyên không tồn tại — đáp án e); **5xx** "lỗi tại tôi" (500 Internal Server Error cho lỗi code backend). Đáp án b sai vì đăng nhập thành công thường trả 200 (201 chỉ dành cho *tạo mới* tài nguyên); đáp án d sai vì lỗi nội bộ server phải trả 500 chứ không phải 400.
>
> The correct answers are: POST tạo tài nguyên mới thành công → server trả 201, Client gửi dữ liệu sai định dạng (ví dụ JSON không hợp lệ) → server trả 400, Truy vấn một tài nguyên không tồn tại → server trả 404

---

#### Question 33

Form đăng ký trên giao diện web đã có validation đầy đủ: nhập email sai định dạng thì nút "Đăng ký" bị chặn ngay. Vì sao tester vẫn cần kiểm thử API đăng ký một cách riêng biệt?

**Select one:**

- a. Vì kiểm thử API chạy nhanh hơn kiểm thử giao diện nên tiết kiệm thời gian
- b. Vì kiểm thử API không cần môi trường staging
- c. Vì validation ở UI chỉ chặn ở tầng trình bày; kẻ tấn công có thể gọi thẳng API, bỏ qua UI và gửi dữ liệu không hợp lệ — nên server/API bắt buộc phải tự validate ✅ *(Chính xác. Không bao giờ tin tưởng dữ liệu từ client.)*
- d. Vì kiểm thử API giúp giao diện hiển thị đẹp hơn

> Chính xác!
>
> Validation ở giao diện chỉ là lớp bảo vệ ở **tầng trình bày** — nó hoàn toàn có thể bị bỏ qua bằng cách gọi trực tiếp API (qua Postman, curl, hoặc script). Nếu server tin tưởng mù quáng dữ liệu gửi lên, kẻ tấn công sẽ chèn dữ liệu bẩn vào hệ thống. Vì vậy logic kiểm tra dữ liệu **bắt buộc phải tồn tại ở phía server**, và kiểm thử API riêng là cách duy nhất để xác minh lớp bảo vệ này.
>
> The correct answer is: Vì validation ở UI chỉ chặn ở tầng trình bày; kẻ tấn công có thể gọi thẳng API, bỏ qua UI và gửi dữ liệu không hợp lệ — nên server/API bắt buộc phải tự validate

---

#### Question 34

Team muốn áp dụng Shift-Right: sau khi tính năng "gợi ý sản phẩm mới" đã qua kiểm thử trên staging, họ phát hành nó cho **5% người dùng thật**, theo dõi log, metric hiệu năng và phản hồi trong 2 ngày rồi mới mở rộng cho 100%. Cách làm này được gọi là gì?

**Select one:**

- a. Big Bang Release – phát hành đồng loạt cho tất cả người dùng cùng lúc
- b. Kiểm thử hộp đen (Black-box Testing)
- c. Shift-Left – dời kiểm thử sang giai đoạn sớm hơn
- d. Canary Release – phát hành thử cho một nhóm nhỏ người dùng thật và giám sát trong môi trường production trước khi mở rộng ✅ *(Chính xác. Đây là thực hành Shift-Right điển hình.)*

> Chính xác!
>
> **Canary Release** là phát hành tính năng mới cho một tỉ lệ nhỏ người dùng thật, giám sát log/metric/phản hồi trong môi trường production thực tế, rồi mới dần mở rộng — nếu có sự cố, mức ảnh hưởng được giới hạn ở nhóm nhỏ. Đây là thực hành **Shift-Right**: kiểm thử/giám sát *sau khi* phát hành, trong môi trường thật. Ngược lại, kiểm thử trên staging trước khi release thuộc về giai đoạn pre-release (gần với Shift-Left). Đáp án a (Big Bang) là phát hành 100% một lúc — rủi ro cao nhất.
>
> The correct answer is: Canary Release – phát hành thử cho một nhóm nhỏ người dùng thật và giám sát trong môi trường production trước khi mở rộng

---

#### Question 35

Trong pipeline CI/CD, ở bước chạy Unit Test có 3 test case bị Fail. Theo nguyên tắc **Fail Fast**, pipeline nên xử lý thế nào?

**Select one:**

- a. Dừng pipeline ngay, không build/deploy tiếp; developer sửa lỗi càng sớm càng rẻ ✅ *(Chính xác. Phát hiện sớm – dừng sớm – sửa rẻ.)*
- b. Vẫn deploy lên production rồi sửa lỗi sau, vì đã lỡ chạy pipeline
- c. Tự động bỏ qua các test bị Fail vì "ở môi trường CI test hay Fail oan"
- d. Chờ đến cuối tuần mới xem lại kết quả test cho đỡ gián đoạn công việc

> Chính xác!
>
> **Fail Fast** nghĩa là khi phát hiện lỗi ở giai đoạn sớm (Unit Test Fail), pipeline **dừng ngay lập tức** và báo động — không tốn tài nguyên chạy tiếp các bước build, integration test, deploy cho một bản vốn đã lỗi. Sửa lỗi càng sớm chi phí càng rẻ (lỗi lọt ra production đắt gấp nhiều lần). Đáp án b và c đều phá vỡ mục đích của CI: deploy code lỗi và phớt lờ test Fail sẽ biến pipeline thành "máy phát hành lỗi tự động".
>
> The correct answer is: Dừng pipeline ngay, không build/deploy tiếp; developer sửa lỗi càng sớm càng rẻ

---

#### Question 36

Team cần kiểm thử tự động cho chatbot hỗ trợ khách hàng (dùng LLM): với câu hỏi *"Chính sách đổi trả của shop là gì?"*, chatbot có thể trả lời bằng nhiều cách diễn đạt khác nhau nhưng vẫn đúng ý. Cách kiểm chứng nào sau đây là **phù hợp nhất**?

**Select one:**

- a. So sánh chuỗi tuyệt đối: câu trả lời phải khớp từng ký tự với đáp án mẫu
- b. Kiểm tra ý chính/từ khóa bắt buộc và đánh giá ngữ nghĩa (semantic): câu trả lời phải chứa các thông tin cốt lõi (ví dụ "30 ngày", "còn nguyên tem mác"), cho phép biến thiên văn phong ✅ *(Chính xác. LLM không mang tính đơn định nên không assert chuỗi tuyệt đối.)*
- c. Chỉ kiểm tra chatbot có trả lời trong 1 giây hay không, nội dung không quan trọng
- d. Không thể kiểm thử tự động chatbot LLM, bắt buộc phải kiểm thủ công 100%

> Chính xác!
>
> LLM có tính **không đơn định**: cùng một câu hỏi có thể cho nhiều cách diễn đạt khác nhau đều đúng. Vì vậy không thể assert so sánh chuỗi tuyệt đối (đáp án a sẽ gây Fail oan liên tục). Cách đúng là kiểm tra **ngữ nghĩa**: câu trả lời có chứa các ý chính/từ khóa bắt buộc không, có mâu thuẫn với chính sách không — có thể dùng bộ kiểm tra từ khóa, LLM-as-judge, hoặc embedding similarity với ngưỡng chấp nhận được.
>
> The correct answer is: Kiểm tra ý chính/từ khóa bắt buộc và đánh giá ngữ nghĩa (semantic): câu trả lời phải chứa các thông tin cốt lõi (ví dụ "30 ngày", "còn nguyên tem mác"), cho phép biến thiên văn phong

---

#### Question 37

Chọn **BA** ứng dụng **hợp lý** của GenAI trong công việc kiểm thử phần mềm.

**Select one or more:**

- a. Tự động sinh test case từ user story và tài liệu yêu cầu ✅ *(Đúng – AI hỗ trợ soạn thảo nhanh từ test basis.)*
- b. Gợi ý dữ liệu biên và các trường hợp biên mà tester dễ bỏ sót ✅ *(Đúng – AI giúp tăng độ bao phủ các case "khó nghĩ ra".)*
- c. Tự quyết định release phần mềm thay cho con người mà không cần review
- d. Tóm tắt, phân loại log lỗi và hỗ trợ soạn thảo báo cáo defect ✅ *(Đúng – AI xử lý khối lượng log lớn rất hiệu quả.)*
- e. Đảm bảo phần mềm không còn lỗi 100% sau khi áp dụng AI

> Chính xác!
>
> GenAI là **trợ lý đắc lực** của tester: sinh test case nháp từ yêu cầu (a), gợi ý các trường hợp biên dễ bị bỏ sót (b), tóm tắt/phân loại hàng nghìn dòng log lỗi và phác thảo defect report (d). Nhưng AI **không thể thay thế phán quyết của con người**: quyết định release luôn cần người review và chịu trách nhiệm (c sai), và không công cụ nào — kể cả AI — đảm bảo phần mềm hết lỗi 100% (e sai, đây là ngộ nhận nguy hiểm).
>
> The correct answers are: Tự động sinh test case từ user story và tài liệu yêu cầu, Gợi ý dữ liệu biên và các trường hợp biên mà tester dễ bỏ sót, Tóm tắt, phân loại log lỗi và hỗ trợ soạn thảo báo cáo defect

---

#### Question 38

Tester dùng GenAI để sinh test case cho chức năng "đăng nhập bằng vân tay". AI trả về một bộ test case rất chi tiết — nhưng trong đó có nhiều case kiểm tra chức năng "đăng nhập bằng nhận diện khuôn mặt", một tính năng **hoàn toàn không tồn tại** trong đặc tả. Hiện tượng này được gọi là gì và tester phải làm gì?

**Select one:**

- a. Overfitting – cứ dùng nguyên bộ test case vì AI luôn đúng
- b. Data leakage – xoá toàn bộ test case và không bao giờ dùng AI nữa
- c. Hallucination (ảo giác) – AI bịa ra test case dựa trên yêu cầu không tồn tại; tester phải rà soát, đối chiếu từng test case với test basis (đặc tả) trước khi sử dụng ✅ *(Chính xác. AI bịa rất tự tin nên con người phải kiểm chứng.)*
- d. Prompt injection – hacker đã tấn công vào hệ thống AI

> Chính xác!
>
> **Hallucination** là hiện tượng GenAI "bịa" ra nội dung nghe rất thuyết phục nhưng không có thật — ở đây là test case cho tính năng không tồn tại trong đặc tả. Nguy hiểm ở chỗ AI bịa rất tự tin, khiến người thiếu cảnh giác tin theo. Vì vậy mọi output của AI đều phải được **rà soát và đối chiếu với test basis** (đặc tả/yêu cầu gốc) trước khi đưa vào sử dụng; AI là trợ lý soạn thảo, không phải nguồn chân lý.
>
> The correct answer is: Hallucination (ảo giác) – AI bịa ra test case dựa trên yêu cầu không tồn tại; tester phải rà soát, đối chiếu từng test case với test basis (đặc tả) trước khi sử dụng

---

#### Question 39

Một team phát triển ứng dụng web hiện đại quyết định phân bổ ngân sách kiểm thử theo mô hình Testing Trophy của Kent C. Dodds. Điểm khác biệt cốt lõi của Testing Trophy so với Test Pyramid truyền thống là gì?

**Select one:**

- a. Tầng UI/E2E chiếm tỉ trọng lớn nhất vì gần người dùng nhất
- b. Chỉ cần kiểm thử tĩnh (static), không cần các tầng còn lại
- c. Tầng Unit Test bị loại bỏ hoàn toàn vì đã có TypeScript
- d. Tầng Integration chiếm tỉ trọng lớn nhất (thay vì Unit như tháp truyền thống), vì integration test cho độ tin cậy cao với chi phí hợp lý cho ứng dụng web hiện đại ✅ *(Chính xác. Trọng tâm đầu tư dịch chuyển từ Unit sang Integration.)*

> Chính xác!
>
> Test Pyramid truyền thống đặt **Unit Test** làm tầng lớn nhất (đáy tháp). **Testing Trophy** (Kent C. Dodds) điều chỉnh cho phát triển web hiện đại: tầng **Static** (ESLint, TypeScript) ở đáy gần như miễn phí, tầng **Integration** là lớn nhất — trọng tâm đầu tư — vì nó kiểm chứng các module phối hợp với nhau, cho độ tin cậy cao với chi phí hợp lý hơn E2E. Unit và E2E vẫn cần nhưng ở mức vừa phải. Đáp án a mô tả Ice-cream cone (anti-pattern), không phải Trophy.
>
> The correct answer is: Tầng Integration chiếm tỉ trọng lớn nhất (thay vì Unit như tháp truyền thống), vì integration test cho độ tin cậy cao với chi phí hợp lý cho ứng dụng web hiện đại

---

#### Question 40

Đặc tả tính điểm thưởng cuối năm của một hệ thống có ba dấu hiệu kiểm thử rõ rệt: (i) tổng điểm tích lũy từ 0–100 với các ngưỡng xếp hạng (Bronze < 50, Silver 50–79, Gold ≥ 80); (ii) mức thưởng cuối cùng phụ thuộc vào **tổ hợp của 3 điều kiện**: là thành viên VIP, thanh toán đúng hạn, không có khiếu nại trong năm; (iii) team đã có sẵn đoạn code tính toán và muốn đo mức độ bao phủ của bộ test lên code đó. Tổ hợp kỹ thuật kiểm thử **phù hợp nhất** cho cả ba dấu hiệu là gì?

**Select one:**

- a. Phân vùng tương đương + Phân tích giá trị biên cho các khoảng điểm (i); Bảng quyết định cho tổ hợp 3 điều kiện (ii); đo bao phủ lệnh/nhánh cho đoạn code (iii) ✅ *(Chính xác. Mỗi dấu hiệu gọi đúng kỹ thuật đặc trưng của nó.)*
- b. Chỉ dùng Bảng quyết định cho toàn bộ đặc tả vì nó bao quát được mọi thứ
- c. Chỉ dùng Phân tích giá trị biên cho toàn bộ đặc tả vì có các ngưỡng điểm
- d. Không cần kỹ thuật nào, chỉ cần kiểm thử khám phá tự do là đủ

> Chính xác!
>
> Mỗi dấu hiệu trong đặc tả "gọi tên" một kỹ thuật: (i) **khoảng giá trị với ngưỡng** → Phân vùng tương đương + Phân tích giá trị biên (kiểm tra 49, 50, 79, 80...); (ii) **tổ hợp điều kiện logic** quyết định kết quả → **Bảng quyết định** (2³ = 8 tổ hợp VIP/đúng hạn/khiếu nại); (iii) **code sẵn có cần đo bao phủ** → đo **bao phủ lệnh/nhánh** (statement/branch coverage). Đáp án b sai vì bảng quyết định không hiệu quả cho khoảng giá trị liên tục; đáp án c sai vì BVA không xử lý được tổ hợp điều kiện.
>
> The correct answer is: Phân vùng tương đương + Phân tích giá trị biên cho các khoảng điểm (i); Bảng quyết định cho tổ hợp 3 điều kiện (ii); đo bao phủ lệnh/nhánh cho đoạn code (iii)

---
