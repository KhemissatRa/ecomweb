import React, { useState, useContext } from 'react'
import { CartContext } from '../context/cartContext'
import axios from 'axios'
import Category from '../compenents/Category'
import Timeline from '../compenents/Timeline'
import Fouter from '../compenents/Fouter'

export default function Checkout() {
  const { totalPrice, cart } = useContext(CartContext)

  const [order, setOrder] = useState({
    name: "",
    willaya: "",
    city: "",
    Number: ""
  })

  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({
    type: '', // 'success' or 'error'
    title: '',
    message: ''
  })

  // Handle form input
  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    })
  }

  // Build orders from cart
  const buildOrders = () =>
    cart.map(({ title, quantity }) => ({ title, quantity }))

  // Validation function
  const validateForm = () => {
    if (!cart.length) {
      showErrorModal('سلة التسوق فارغة', 'الرجاء إضافة منتجات إلى السلة قبل إتمام الطلب')
      return false
    }

    if (!order.name.trim()) {
      showErrorModal('الاسم مطلوب', 'الرجاء إدخال اسمك الكامل')
      return false
    }

    if (!order.Number.trim()) {
      showErrorModal('رقم الهاتف مطلوب', 'الرجاء إدخال رقم هاتف صحيح')
      return false
    }

    // Phone number validation (Algerian format)
    const phoneRegex = /^(05|06|07)[0-9]{8}$/
    if (!phoneRegex.test(order.Number.replace(/\s/g, ''))) {
      showErrorModal('رقم هاتف غير صحيح', 'الرجاء إدخال رقم هاتف جزائري صحيح (05/06/07 متبوعاً بـ 8 أرقام)')
      return false
    }

    if (!order.willaya.trim()) {
      showErrorModal('الولاية مطلوبة', 'الرجاء إدخال اسم الولاية')
      return false
    }

    if (!order.city.trim()) {
      showErrorModal('المدينة مطلوبة', 'الرجاء إدخال اسم المدينة')
      return false
    }

    return true
  }

  // Show error modal
  const showErrorModal = (title, message) => {
    setModalContent({
      type: 'error',
      title,
      message
    })
    setShowModal(true)
  }

  // Show success modal
  const showSuccessModal = () => {
    setModalContent({
      type: 'success',
      title: 'تم إرسال الطلب بنجاح! 🎉',
      message: 'شكراً لك! تم استلام طلبك وسنتواصل معك قريباً لتأكيد التفاصيل.'
    })
    setShowModal(true)
    
    // Reset form
    setOrder({
      name: "",
      willaya: "",
      city: "",
      Number: ""
    })
  }

  // Submit order
  const handleValidate = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    const finalOrder = {
      order: buildOrders(),
      name: order.name,
      willaya: order.willaya,
      city: order.city,
      email: "admin@email.com",
      Number: order.Number,
      totalPrice,
      Done: false
    }

    try {
      await axios.post("https://backendoctoweb.onrender.com/order/", finalOrder)
      showSuccessModal()
    } catch (err) {
      console.error(err)
      showErrorModal(
        'فشل إرسال الطلب',
        'حدث خطأ أثناء معالجة طلبك. الرجاء المحاولة مرة أخرى أو التواصل مع الدعم.'
      )
    } finally {
      setLoading(false)
    }
  }

  // Close modal
  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Category />

      <div className="w-full flex bg-gradient-to-br from-slate-50 to-slate-100 justify-center min-h-screen items-center py-12 px-4">
        <form
          onSubmit={handleValidate}
          className="w-full max-w-md"
        >
          <fieldset className="bg-white shadow-2xl rounded-2xl border-2 border-slate-200 p-8 space-y-6">
            <legend className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              إتمام الطلب
            </legend>

            {/* Cart Summary */}
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800 font-medium">
                عدد المنتجات: <span className="font-bold">{cart.length}</span>
              </p>
              <p className="text-2xl font-bold text-blue-900 mt-1">
                {totalPrice} دج
              </p>
            </div>

            {/* Name */}
            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">الاسم الكامل *</span>
              </label>
              <input
                name="name"
                required
                value={order.name}
                onChange={handleChange}
                type="text"
                className="input input-bordered bg-slate-50 text-black w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="أدخل اسمك الكامل"
              />
            </div>

            {/* Phone */}
            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">رقم الهاتف *</span>
              </label>
              <input
                name="Number"
                required
                value={order.Number}
                onChange={handleChange}
                type="tel"
                dir="ltr"
                className="input input-bordered bg-slate-50 text-black w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="05XX XX XX XX"
              />
              <span className="text-xs text-slate-500">مثال: 0555123456</span>
            </div>

            {/* Wilaya */}
            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">الولاية *</span>
              </label>
              <input
                name="willaya"
                required
                value={order.willaya}
                onChange={handleChange}
                type="text"
                className="input input-bordered bg-slate-50 text-black w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="أدخل اسم الولاية"
              />
            </div>

            {/* City */}
            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text font-semibold text-slate-700">المدينة *</span>
              </label>
              <input
                name="city"
                required
                value={order.city}
                onChange={handleChange}
                type="text"
                className="input input-bordered bg-slate-50 text-black w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="أدخل اسم المدينة"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn w-full rounded-lg font-bold text-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  أكد الطلبية
                </>
              )}
            </button>

            <p className="text-xs text-center text-slate-500 mt-4">
              جميع الحقول المميزة بـ (*) مطلوبة
            </p>
          </fieldset>
        </form>
      </div>

      <Timeline />

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all animate-fade-in">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              {modalContent.type === 'success' ? (
                <div className="bg-green-100 rounded-full p-4">
                  <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              ) : (
                <div className="bg-red-100 rounded-full p-4">
                  <svg className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className={`text-2xl font-bold text-center mb-3 ${
              modalContent.type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {modalContent.title}
            </h3>

            {/* Message */}
            <p className="text-slate-600 text-center mb-6 leading-relaxed">
              {modalContent.message}
            </p>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`btn w-full rounded-lg font-bold ${
                modalContent.type === 'success' 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-red-600 hover:bg-red-700 text-white'
              } border-none shadow-lg transition-all duration-300`}
            >
              حسناً
            </button>
          </div>
        </div>
      )}
    </>
  )
}