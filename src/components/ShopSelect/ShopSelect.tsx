import { getSorting, getStatus } from '../../redux/productsSlice'
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks'
import { useTranslation } from 'react-i18next'

import s from './ShopSelect.module.scss'

export const ShopSelect = () => {
  const { t } = useTranslation()

  const dispatch = useAppDispatch()
  const sorting = useAppSelector((s) => s.products.sorting)

	return (
		<div className={s.inner}>
		<select
			className={s.selectTabs}
			onChange={(e) => {
				dispatch(getStatus(e.target.value))
			}}
		>
			<option defaultValue='all' value='all'>
				{t('shop.all')}
			</option>
			<option value='sportsuit'>{t('shop.suit')}</option>
			<option value='sweatshirt'>{t('shop.sweatshirt')}</option>
			<option value='tshort'>{t('shop.tshort')}</option>
			<option value='hoody'>{t('shop.hoody')}</option>
		</select>
		<div>
			<select
				className={s.selectTabs}
				onChange={(e) => {
					dispatch(getSorting(e.target.value))
				}}
			>
				<option
					value='big'
					onClick={() =>
						dispatch(getSorting('big' !== sorting ? 'big' : ''))
					}
				>
					{t('shop.big')}
				</option>
				<option
					value='less'
					onClick={() =>
						dispatch(getSorting('less' !== sorting ? 'less' : ''))
					}
				>
					{t('shop.less')}
				</option>
				<option
					value='discount'
					onClick={() =>
						dispatch(
							getSorting('discount' !== sorting ? 'discount' : '')
						)
					}
				>
					{t('shop.discount')}
				</option>
			</select>
		</div>
		<div className={s.innerBtn}>
			<p>{t('shop.sortTitle')}</p>
			<button
				className={[s.btnSort, sorting === 'big' ? s.active : ''].join(
					' '
				)}
				onClick={() =>
					dispatch(getSorting('big' !== sorting ? 'big' : ''))
				}
			>
				{t('shop.big')}
			</button>
			<button
				className={[s.btnSort, sorting === 'less' ? s.active : ''].join(
					' '
				)}
				onClick={() =>
					dispatch(getSorting('less' !== sorting ? 'less' : ''))
				}
			>
				{t('shop.less')}
			</button>
			<button
				className={[
					s.btnSort,
					sorting === 'discount' ? s.active : '',
				].join(' ')}
				onClick={() =>
					dispatch(getSorting('discount' !== sorting ? 'discount' : ''))
				}
			>
				{t('shop.discount')}
			</button>
		</div>
	</div>
	)
}