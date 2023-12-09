'use client'
import { useState } from "react";

import Image from "next/image";
import Header from "./Header";
import Search from "./Search";

export default function AccountPage() {

    const [isItemVisible, setItemVisible] = useState(true);

    const showFormItem = () => {
        setItemVisible(true); // Sửa thành true để hiển thị form
    }

    const closeFormItem = () => {
        setItemVisible(false); // Sửa thành false để ẩn form
    }


    return (
        <div>

            {/* left content  */}
            <div className="div-content-left">

                <div className="div-user">
                    <Image
                        src="/user.png"
                        alt="Description of the image"
                        width={50} // Độ rộng của hình ảnh
                        height={50} // Chiều cao của hình ảnh
                    />
                    <h4>Hoàng Khuyến</h4>
                    <label>-- Admin --</label>
                </div>

                <button className="line"></button>
                <div className="nav-manager">
                    <button>Quản lý loại sản phẩm</button>
                    <button>Quản lý sản phẩm</button>
                    <button>Quản lý tài khoản</button>
                    <button>Quản lý đơn hàng</button>
                </div>
            </div>

            {/* Right-content */}
            <div className="div-content-right"><Header />

                <div className="sreach-container">
                    <label htmlFor="itemLabel">Quản lý tài khoản: </label>
                    <div>
                        <input type="text" className="account-search" id="itemLabel" placeholder="Tìm kiếm tài khoản" required />
                        <button className="button-sreach" type="submit">Tìm kiếm</button>
                        <button className="button-add" type="button" onClick={showFormItem}>Thêm</button>
                    </div>
                </div><br />

                {/* Bảng  */}
                <table border={1} cellPadding={2} id="AccountTable">

                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                            <th>FullName</th>
                            <th>Role</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>chutan</td>
                            <td>123</td>
                            <td>Vòng Chủ Tân</td>
                            <td>Employee</td>

                            <td>
                                <button className="button-update">CẬP NHẬT</button><br />
                                <button className="button-delete">XÓA</button>
                            </td>
                        </tr>

                    </tbody>
                </table>

                {isItemVisible && (

                    <div className="" id="form-add-account">
                        <div className="container-itemPoduct-account">
                            <form className="form-itemProduct-account">
                                <span className="close-button-account" onClick={closeFormItem}>X</span>
                                <h2>Thêm tài khoản</h2>
                                <input className="account-user" type="text" placeholder="Username" required /><br />
                                <input className="account-password" type="text" placeholder="Password" required /><br />
                                <input className="account-fullName" type="text" placeholder="FullName" required /><br />

                                <select className="inputSelect" name="Phân Quyền" id="Select">
                                    <option value="none">#Không có#</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Employee">Employee</option>
                                </select><br />

                                <button className="button-add-account" type="submit">Thêm</button> <br />
                            </form>
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}
